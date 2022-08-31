import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { User } from '../models/user';
import 'firebase/firestore';
import 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = true;
  constructor(private router: Router,
    private firestore: AngularFirestore) { }

  getIsLogin(){
    return this.isLogin;
  }


  loginUser(email: string,password: string){
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{resolve();}
          ,(error: any)=>{reject(error);}
        );
      }
    );
  }

  createUser(email: string, password: string){
    return new Promise<void>((resolve, reject) =>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then(
        ()=>{resolve();}
        ,(error: any)=>{reject(error);}
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
  return new Promise<void>((resolve,reject) =>{
    const hh = this.firestore.collection('users').doc(idUser.toString()).set(Object.assign({}, user)).then(
        ()=>{resolve();}
      ,(error: any)=>{reject(error);
    });
  },);
}

}
