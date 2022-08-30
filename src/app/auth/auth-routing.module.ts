import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './page404/page404.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '**',
    component: Page404Component,
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
