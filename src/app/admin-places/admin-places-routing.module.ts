import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPlacesComponent } from './admin-places.component';
import { AddEditPlaceComponent } from './add-edit-place/add-edit-place.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPlacesComponent
  },
  {
    path: 'add-or-edit',
    component: AddEditPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPlacesRoutingModule {}
