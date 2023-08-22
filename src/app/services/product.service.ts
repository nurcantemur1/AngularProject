import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44383/api/Products/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      this.apiUrl + 'getall'
    );
  }
  getproductsOfCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      this.apiUrl + 'getallcategory/id?id=' + categoryId
    );
  }

  getProduct(productId: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      this.apiUrl + 'getbyid/id?productId=' + productId
    );
  }
  getProductByName(
    productName: string
  ): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      this.apiUrl + 'getproductbyname/name?name=' + productName
    );
  }
  productAdd(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",product);
  }

}
