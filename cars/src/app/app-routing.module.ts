import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./car-view/car-view.module').then( m => m.CarViewPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./car-add/car-add.module').then( m => m.CarAddPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./menu-pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./menu-pages/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./menu-pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./menu-pages/history/history.module').then( m => m.HistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
