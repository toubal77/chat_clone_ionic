import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { User } from '../models/user';;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = true;
  constructor(private router: Router) { }

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
  firebase.firestore().collection('users').doc(idUser.toString()).set(Object.assign({}, user)).then(()=>{
    console.log('add info user');
  }).catch((error: string)=>{
    console.log('info user not added '+error);

  });
}

}
