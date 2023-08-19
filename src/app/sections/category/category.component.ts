import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories: Category[] = [];
  currentCategory:Category;
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
    console.log(this.currentCategory);
  }

  getCurrentCategory(category:Category){
    if(this.currentCategory==category){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
