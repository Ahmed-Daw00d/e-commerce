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
  totalQuantity: any = 0;
  cartEmpty:boolean=false;
  //
  ngOnInit() {
    this.convertCart();
    this.getCartProducts();
    this.cartProducts.length==0?this.cartEmpty=false:this.cartEmpty=true;
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
    this.getQuantityTotal();
  }
  // calc all price to all product in cart
  getCartTotle() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }
  //plus or mins quantity in item from cart
  addAmount(index: number) {
    if (this.cartProducts[index].quantity < 10) {
      this.cartProducts[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts[index].quantity = 10;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    this.getCartTotle();
    this.getQuantityTotal();
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
    this.getQuantityTotal();
  }
  // delet item from cart
  Delete(index: any) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotle();
    this.getQuantityTotal();
    if(this.cartProducts.length==0){
      window.location.reload();
    }
  }
  //calac total quantity for all item in cart
  getQuantityTotal(){
    this.totalQuantity=0;
    for(let i in this.cartProducts){
      this.totalQuantity+=this.cartProducts[i].quantity
    }

  }
  //delete all item in cart
  clearCart(){
    this.cartProducts.splice(0,this.cartProducts.length);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotle();
    this.getQuantityTotal();
    window.location.reload();
  }
}
