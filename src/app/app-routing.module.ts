import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'pubs',
    loadChildren: () => import('./pubs/pubs.module').then( m => m.PubsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./pubs/advanced-search/advanced-search.module').then( m => m.AdvancedSearchModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'my-favourite-places',
    loadChildren: () => import('./pubs/my-favourite-places/my-favourite-places.module').then( m => m.MyFavouritePlacesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'my-bookings',
    loadChildren: () => import('./my-bookings/my-bookings.module').then( m => m.MyBookingsModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'admin-places',
    loadChildren: () => import('./admin-places/admin-places.module').then( m => m.AdminPlacesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'admin-bookings',
    loadChildren: () => import('./admin-bookings/admin-bookings.module').then( m => m.AdminBookingsModule),
    canLoad: [AuthGuard]
  },
  {path: '',
  redirectTo: 'pubs',
  pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
