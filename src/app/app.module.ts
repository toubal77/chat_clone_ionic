import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthPage } from './auth/auth.page';

// const appRoutes: Routes = [
//   {
//     path: '',
//     component: AuthPage
//   },
//   {
//     path: 'page404',
//     loadChildren: () => import('./auth/page404/page404.module').then( m => m.Page404PageModule)
//   },
//   {
//     path: 'signup',
//     loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
//   },
//   {
//     path: 'signin',
//     loadChildren: () => import('./auth/signin/signin.module').then( m => m.SigninPageModule)
//   }
//   // { path: '', redirectTo: 'home', pathMatch: 'full' },
//   // {path: 'auth/signin', component: SigninComponent},
//   // {path: 'auth/signup', component: SignupComponent},
//   // {path: 'auth/page404', component: Page404Component},
//   // {path: '', component: SigninComponent},
// ];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
