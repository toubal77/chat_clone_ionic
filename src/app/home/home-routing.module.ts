import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllChatComponent } from './all-chat/all-chat.component';
import { DetailChatComponent } from './detail-chat/detail-chat.component';
const routes: Routes = [
  {
    path: '',
    component: AllChatComponent,
  },
  {
    path: 'detail',
    component: DetailChatComponent,
  },
  {
    path: ':detail',
    component: DetailChatComponent,
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
