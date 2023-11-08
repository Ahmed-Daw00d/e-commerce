import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LocationComponent } from './components/location/location.component';

import { SharedModule as SharedModule } from "../shared/shared.module";
import { DpModule } from '../dp/dp.module';

@NgModule({
    declarations: [CartComponent, LocationComponent],
    exports: [CartComponent],
    imports: [CommonModule, FormsModule, RouterLink, SharedModule,DpModule]
})
export class CartsModule {
 
}
