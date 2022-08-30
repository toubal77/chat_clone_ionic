import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Page404Component } from './page404/page404.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage,SignInComponent,SignUpComponent,Page404Component]
})
export class AuthPageModule {}
