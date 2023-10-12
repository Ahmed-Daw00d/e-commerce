import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  //products is a array to store data and send data to html home
  products: any[] = [
   
  ];
//service get Alldata from ProductsService 
  constructor(private service: ProductsService,public router:Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  //function get single data from service (getAlldata)
  getProducts() {

    this.service.getAllProducts().subscribe(
      //res is a item get data from AllProducts and store to products
      (res: any) => {
        this.products = res;
      },
      (error) => {
        this.router.navigate(["error"]);
       
       console.log(error.message)
      }
    );
  }
}
