import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, FormsModule,RouterLink],
  exports: [CartComponent],
})
export class CartsModule {}
