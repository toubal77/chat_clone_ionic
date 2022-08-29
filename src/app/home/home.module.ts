import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AllChatComponent } from './all-chat/all-chat.component';
import { HomeListComponent } from './home-list/home-list.component';
import { DetailChatComponent } from './detail-chat/detail-chat.component';

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
