import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBookingsComponent } from './admin-bookings.component';

import { AdminBookingsRoutingModule } from './admin-booking-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminBookingsRoutingModule
  ],
  declarations: [AdminBookingsComponent],
})
export class AdminBookingsModule { }
