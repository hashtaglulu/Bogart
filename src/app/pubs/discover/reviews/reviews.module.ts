import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsComponent } from './reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';

import { ReviewsRoutingModule } from './reviews-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReviewsRoutingModule
  ],
  declarations: [ReviewsComponent, AddReviewComponent],
})
export class ReviewsModule { }
