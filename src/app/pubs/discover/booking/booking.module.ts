import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingRoutingModule } from './booking-routing.module';

import { BookingComponent } from './booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookingRoutingModule
  ],
  declarations: [BookingComponent],
  exports: []
})
export class BookingModule { }
