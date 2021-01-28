import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPlacesComponent } from './admin-places.component';
import { AddEditPlaceComponent } from './add-edit-place/add-edit-place.component';

import { AdminPlacesRoutingModule } from './admin-places-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPlacesRoutingModule
  ],
  declarations: [AdminPlacesComponent, AddEditPlaceComponent],
})
export class AdminPlacesModule { }
