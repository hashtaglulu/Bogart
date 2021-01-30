import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedSearchComponent } from './advanced-search.component';
import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdvancedSearchRoutingModule
  ],
  declarations: [AdvancedSearchComponent],
})
export class AdvancedSearchModule { }
