import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PubsPage } from './pubs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PubsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path: ':placeId', //dynamic parameter -> different places with diff Id
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
          },
          {
            path: ':placeId', //details page where can see all bookings
            loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
          },
          {
            path: 'edit/:placeId', //path that consists of 2 segments: hardcoded & dynamic segmnent
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/pubs/tabs/discover',
        pathMatch: 'full' 
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pubs/tabs/discover',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubsPageRoutingModule {}
