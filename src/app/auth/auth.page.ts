import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
isLogin: boolean;
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.getisLogin();
  }

  getisLogin(){
   this.isLogin= this.authService.getIsLogin();
  }
  signinSignUp(){
    this.authService.isLoginOrNot();
  }

  isAuth(){
    if(this.isLogin){
      this.router.navigateByUrl('/home');
    }
  }
}
