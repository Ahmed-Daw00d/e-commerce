import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //http is prameter to extend from HttpClient and this help to get data from api
  constructor(private http: HttpClient) {}

  //function get All data from api
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  //function get All data categories from api
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
//
getProductsByCategory(keyword:any){
  return  this.http.get("https://fakestoreapi.com/products/category/"+keyword)
}

}
