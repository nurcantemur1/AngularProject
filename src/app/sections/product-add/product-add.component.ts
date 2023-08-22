import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      categoryId: ["", Validators.required],
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
    });
  }
  productAdd() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.productAdd(productModel).subscribe(
        (response) => {
            this.toastrService.success(response.message, "Başarılı");
        },
        (errorResponse) => {
          if (errorResponse.error.Errors.length > 0) {
            for (let i = 0; i < errorResponse.error.Errors.length; i++) {
              this.toastrService.error(
                errorResponse.error.Errors[i].ErrorMessage,
                "Doğrulama Hatası"
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error("From eksik");
    }
  }
}
