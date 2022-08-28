import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChatPage } from './home-chat.page';


const routes: Routes = [
  {
    path: '',
    component: HomeChatPage,
    children: [
      {
        path: 'detailChat',
        children: [
          {
            path: '',
            loadChildren: () => import('./detail-chat/detail-chat.module').then( m => m.DetailChatPageModule)
          },
        ]
      },
      {
        path: ':chatId',
        children: [
          {
            path: '',
            loadChildren: () => import('./detail-chat/detail-chat.module').then( m => m.DetailChatPageModule)
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
