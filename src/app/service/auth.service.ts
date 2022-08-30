import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment.prod';
firebase.initializeApp(environment.firebase);
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
    this.router.navigateByUrl('auth/signIn');
  });
}
}
