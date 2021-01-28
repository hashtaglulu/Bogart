import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBookingsComponent } from './my-bookings.component';

import { MyBookingsRoutingModule } from './my-booking-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyBookingsRoutingModule
  ],
  declarations: [MyBookingsComponent],
})
export class MyBookingsModule { }
