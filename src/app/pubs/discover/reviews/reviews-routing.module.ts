import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsComponent } from './reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  },
  {
    path: 'add-review',
    component: AddReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
