import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path: 'booking/:placeId',  //dynamic parameter -> different places with diff Id
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingModule)
  },
  {
    path: 'reviews/:placeId',  //dynamic parameter -> different places with diff Id
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
