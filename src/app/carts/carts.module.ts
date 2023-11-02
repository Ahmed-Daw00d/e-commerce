import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [CartComponent, LocationComponent],
  imports: [CommonModule, FormsModule,RouterLink],
  exports: [CartComponent],
})
export class CartsModule {
 
}
