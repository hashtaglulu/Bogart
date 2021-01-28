import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFavouritePlacesComponent } from './my-favourite-places.component';

import { MyFavouritePlacesRoutingModule } from './my-favourite-places-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyFavouritePlacesRoutingModule
  ],
  declarations: [MyFavouritePlacesComponent],
})
export class MyFavouritePlacesModule { }
