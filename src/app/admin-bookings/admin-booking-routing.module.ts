import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBookingsComponent } from './admin-bookings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBookingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBookingsRoutingModule {}
