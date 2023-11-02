import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SliderProductComponent } from './components/slider-product/slider-product.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';




@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent,
        SliderProductComponent,
      
    ],
    exports: [
        AllProductsComponent,
        ProductsDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,FormsModule,RouterModule,MdbCarouselModule
    ]
})
export class ProductsModule { }
