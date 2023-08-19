import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  filterText="";
  dataLoaded = false;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=> {
      if(params["categoryId"]){
        this.getCategoryOfProducts(params["categoryId"]);
        console.log("ben çalıştım");
      }
      else{
        this.getProducts();
      }
    });
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  getCategoryOfProducts(categoryId: number) {
    this.productService
      .getproductsOfCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
      });
  }
  addToCart(product:Product){
    this.toastrService.success("sepete eklendi",product.productName);
    this.cartService.addToCart(product);
    console.log(product);
  }
  
}