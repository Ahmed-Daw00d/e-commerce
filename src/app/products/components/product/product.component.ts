import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() data:any={};

addButton:boolean=false;
amount:number=1;
constructor(){

}
ngOnInit(){

}
//send item to products-components
@Output() item = new EventEmitter()
add(){
this.item.emit({item:this.data,quantity:this.amount})
}

}
