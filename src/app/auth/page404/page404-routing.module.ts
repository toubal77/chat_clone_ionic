import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Page } from './page404.page';

const routes: Routes = [
  {
    path: '',
    component: Page404Page
  },
  {
    path: 'page404',
    loadChildren: () => import('./page404.module').then( m => m.Page404PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page404PageRoutingModule {}
