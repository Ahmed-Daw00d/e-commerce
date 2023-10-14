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
  products: any[] = [];
   //product is a array to store data from products and send data to html home
  product: any[] = [];
  //categorie is a array to store data and send data to html home
  categories: any[] = [];
  //
  loading:boolean=false;

  //service get Alldata from ProductsService
  constructor(private service: ProductsService, public router: Router) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategorie();
  }
  //function get single data from service (getAlldata)
  getProducts() {
    this.loading=true;
    this.service.getAllProducts().subscribe(
      //res is a item get data from AllProducts and store to products
      (res: any) => {
        this.products = res;
        this.product=this.products;
        this.loading=false;
      },
      (error) => {
        this.router.navigate(['error']);
        this.loading=false;
        console.log(error.message);
      }
    );
  }
  //function get single data from service (getAlldata)
  getCategorie() {
    this.loading=true;
    this.service.getAllCategories().subscribe(
      (cat: any) => {
        this.categories = cat;
        this.loading=false;
      },
      (error) => {
        alert(error.massege);
        this.loading=false;
      }
    );
  }

  //filter product by category (api)
  
  /*filterCategorie(event: any) {
      let value = event.target.value;
      value!="All"?
      this.service.getProductsByCategory(value).subscribe((res:any) => {
        this.products = res;
      }):window.location.reload();
    }*/

    //filter product by category (js)
  filterCategorie(event: any) {
    this.loading=true;
    let value: string = event.target.value;

    value != 'All'
      ? (this.product = this.products.filter((s) => s.category == value),  this.loading=false)
      : window.location.reload();
  }
  
}
