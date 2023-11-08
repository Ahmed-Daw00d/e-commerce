import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss'],

})
export class SliderProductComponent {
desplay:boolean=true;
@Input() item:any[]=[]
index1:number= 0;
index2:number= 0;
index3:number= 0;
constructor(){

}
ngOnInit(){
 this.item.length==0?this.desplay=false:this.desplay=true;
 this.index1= Math.floor(Math.random() * this.item.length);
  this.index2= Math.floor(Math.random() * this.item.length+1);
  this.index3= Math.floor(Math.random() * this.item.length+2);
}

}
