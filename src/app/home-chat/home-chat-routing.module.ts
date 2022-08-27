import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChatPage } from './home-chat.page';


const routes: Routes = [
  {
    path: '',
    component: HomeChatPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home-chat.module').then( m => m.HomeChatPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo:  'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeChatPageRoutingModule {}
