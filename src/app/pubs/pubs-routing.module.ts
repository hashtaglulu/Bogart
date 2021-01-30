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
        loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule),
      },
      {
        path: 'my-favourite-places',
        loadChildren: () => import('./my-favourite-places/my-favourite-places.module').then( m => m.MyFavouritePlacesModule),
      },
      {
        path: 'advanced-search',
        loadChildren: () => import('./advanced-search/advanced-search.module').then( m => m.AdvancedSearchModule),
      },
      {
        path: '',
        redirectTo: '/pubs/tabs/discover',
        pathMatch: 'full'
      }
    ],
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
