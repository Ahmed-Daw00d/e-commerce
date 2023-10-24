import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  desplay: boolean = false;
  screnWidth: any = window.innerWidth;
  //
  cartProducts: any[] = [];
  total: any = 0;
  //
  ngOnInit() {
    this.convertCart();
    this.getCartProducts();
  }
  //convert cart from mobile to lap and lap to mobile
  convertCart() {
    this.screnWidth >= 818 ? (this.desplay = true) : (this.desplay = false);
  }
  //get all products add in cart
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotle();
  }
  // calc all price to all product in cart
  getCartTotle() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }
  //
  addAmount(index: number) {
    if (this.cartProducts[index].quantity < 10) {
      this.cartProducts[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts[index].quantity = 10;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    this.getCartTotle();
  }
  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts[index].quantity = 1;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    this.getCartTotle();
  }
}
