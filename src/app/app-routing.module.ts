import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ErrorPageComponent } from './error-page/components/error-page/error-page.component';
import { LocationComponent } from './carts/components/location/location.component';

const routes: Routes = [

  {path:"products",component:AllProductsComponent},
  {path:"details/:id",component:ProductsDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"location/:total",component:LocationComponent},
  {path:"error",component:ErrorPageComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
