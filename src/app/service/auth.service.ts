import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { Firestore } from '@angular/fire/firestore';
import 'firebase/firestore';
firebase.initializeApp(environment.firebase);
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = true;
  constructor(private router: Router,
    private databaseFirestore: Firestore) { }

  getIsLogin(){
    return this.isLogin;
  }


  loginUser(email: string,password: string){
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{resolve();}
          ,(error)=>{reject(error);}
        );
      }
    );
  }

  createUser(email: string, password: string){
    return new Promise<void>((resolve, reject) =>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then(
        ()=>{resolve();}
        ,(error)=>{reject(error);}
      );
    }
  );
}

signOutUser(){
  firebase.auth().signOut().then(()=>{
    this.router.navigateByUrl('auth/signin');
  });
}

setUserInfo(user: User,idUser: string){
  firebase.firestore().collection('users').doc(idUser).set(user).then(()=>{
    console.log('add info user');
  }).catch((error)=>{
    console.log('info user not added');
 alert('info user not added ' +error);
  });
}

}
