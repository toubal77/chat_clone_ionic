import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import firebase from 'firebase/compat/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
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
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),     FormsModule,
         AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
         AngularFireAuthModule,
         AngularFirestoreModule,
         AngularFireStorageModule,
         AngularFireDatabaseModule,
         provideFirebaseApp(() => initializeApp(environment.firebase)),
         provideAnalytics(() => getAnalytics()),
         provideAuth(() => getAuth()),
         provideDatabase(() => getDatabase()),
         provideFirestore(() => getFirestore()),
         provideFunctions(() => getFunctions()),
         provideMessaging(() => getMessaging()),
         providePerformance(() => getPerformance()),
         provideRemoteConfig(() => getRemoteConfig()),
         provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
