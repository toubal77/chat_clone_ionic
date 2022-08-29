import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AllChatComponent } from './all-chat/all-chat.component';
import { DetailChatComponent } from './detail-chat/detail-chat.component';
import { HomeListComponent } from './all-chat/home-list/home-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,AllChatComponent,DetailChatComponent,HomeListComponent]
})
export class HomePageModule {}
