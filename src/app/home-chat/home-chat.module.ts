import { HomeListComponent } from './home-list/home-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeChatPageRoutingModule } from './home-chat-routing.module';

import { HomeChatPage } from './home-chat.page';
import { DetailChatComponent } from './detail-chat/detail-chat.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeChatPageRoutingModule
  ],
  declarations: [HomeChatPage,HomeListComponent,DetailChatComponent,DetailComponent]
})
export class HomeChatPageModule {}
