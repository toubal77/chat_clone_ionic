import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { Page404Page } from './page404/page404.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'page404',
        children: [
          {
            path: '',
            loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
