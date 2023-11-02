import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  locat: string = 'select location';
  
  desblay: boolean = true;
  //
  location: any = {};
  //
  cartProducts: any[] = [];
  name: any = '';
  phone: any = '';
  address: any = 'in store';
  city: any = '';
  district: any = '';
//
  constructor(private router: ActivatedRoute) {}
//
  selectKindLocation(event: any) {
    this.locat = event.target.value;
    this.locat != 'house' ? (this.desblay = false) : (this.desblay = true);
  }
  //
  getData() {
    this.name = document.getElementById('name');
    this.phone = document.getElementById('phone');
    if (this.desblay === true) {
      this.address = document.getElementById('address');
      this.city = document.getElementById('city');
      this.district = document.getElementById('district');
    }
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    //
    this.saveDataInLocation();
    console.log(this.location);
  }
  //
  saveDataInLocation() {
    this.location = {
      cartProducts: this.cartProducts,
      total_price: this.router.snapshot.paramMap.get('total'),
      name: this.name.value,
      phone: this.phone.value,
      address: this.address.value,
      city: this.city.value,
      district: this.district.value,
      date: Date.now,
      userId: Math.random(),
    };
    //
  }

  sendData() {}
}
