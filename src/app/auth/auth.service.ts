import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = true;
  constructor() { }

  isLoginOrNot(){
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }

  getIsLogin(){
    return this.isLogin;
  }

}
