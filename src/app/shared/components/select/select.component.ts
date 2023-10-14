import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  constructor() {}
  ngNoInit(): void {}

 @Input() title: string = '';
@Input() data: any[] = [];
@Output() selectedValue=new EventEmitter();
  detectChange(event: any) {
    this.selectedValue.emit(event);
  }
  
}
