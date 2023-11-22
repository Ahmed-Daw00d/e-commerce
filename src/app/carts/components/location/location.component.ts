import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { DpService } from 'src/app/dp/service/dp.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  locat: string = 'house';

  desblay: boolean = true;
  spinner: boolean = false;
  willDone = false;
  //
  locationAndOrder: any = {};
  //
  cartProducts: any[] = [];
  name: any;
  phone: any;
  address: any;
  city: any;
  district: any;
  date: string = new Date(Date.now()).toLocaleString('en-US');
  userId: any = Math.random();
  //

  constructor(
    private router: ActivatedRoute,
    private routerNav: Router,
    private serviceDp: DpService
  ) {
    //  get all item in cart
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    console.log(this.cartProducts);
  }
  //
  selectKindLocation(event: any) {
    this.locat = event.target.value;
    this.locat != 'store' ? (this.desblay = true) : (this.desblay = false);
  }
  //
  getData() {
    //check internet after send data to firebase
    if (navigator.onLine == true) {
      this.spinner = true;
      this.name = document.getElementById('name');
      this.phone = document.getElementById('phone');
      if (this.desblay === true) {
        this.address = document.getElementById('address');
        this.city = document.getElementById('city');
        this.district = document.getElementById('district');
      }
      // this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      //
      this.saveLocationAndOrder();
    } else {
      this.routerNav.navigate(['/error']);
    }
  }
  //
  saveLocationAndOrder = () => {
    if (
      this.name.value !== '' &&
      this.phone.value !== '' &&
      this.cartProducts.length != 0
    ) {
      this.locationAndOrder = {
        cartProducts: this.cartProducts,
        total_price: this.router.snapshot.paramMap.get('total'),
        location: this.locat,
        name: this.name.value,
        phone: this.phone.value,
        address: this.address.value,
        city: this.city.value,
        district: this.district.value,
        date: new Date(Date.now()).toLocaleString('en-US'),
        userId: this.userId,
      };
      //run function to sent data to datbase and local storage
      this.sendData();
    } else {
      this.spinner = false;
      switch ('') {
        case this.name.value:
          alert('please enter name');
          break;
        case this.phone.value:
          alert('please enter phone');
          break;
      }
    }
  };
  //
  sendData = () => {
    localStorage.setItem('order', JSON.stringify(this.locationAndOrder));
    //sen data to firebase
    this.serviceDp
      .AddToFirebase(this.locationAndOrder, 'orders')
      .then(() => {
        //
        this.spinner = false;
        this.willDone = true;
        setTimeout(() => {
          this.routerNav.navigate(['cart']);
        }, 100000);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //
  clearCart = () => {
    this.cartProducts.splice(0, this.cartProducts.length);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.routerNav.navigate(['cart']);
  };
}
