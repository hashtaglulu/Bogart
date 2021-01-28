import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFavouritePlacesComponent } from './my-favourite-places.component';

const routes: Routes = [
  {
    path: '',
    component: MyFavouritePlacesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFavouritePlacesRoutingModule {}
