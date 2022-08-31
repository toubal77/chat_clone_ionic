import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  authForm!: FormGroup;
  errorMessage!: string;
  constructor(private router: Router,
   private  formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.authForm = this.formBuilder.group({
    email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{6}')]],
      username:['',[Validators.required,]],
      bio:['',[Validators.required,]],
    });
  }

   buildUser(idUser: string, email: string, username: string, bio: string) {
   const user = new User();
   user.uid =idUser;
   user.email = email;
   user.username = username;
   user.bio = bio;
   return user;
  }

  onSubmit(){
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    const username = this.authForm.get('username').value;
    const bio = this.authForm.get('bio').value;
    this.authService.createUser(email, password).then(
      ()=>{
        this.router.navigateByUrl('home');
      },
      (error)=>{
        this.errorMessage = error;
      }
    );
    const idUser =   Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;
    const user = this.buildUser(idUser.toString(),email,username,bio);
    this.authService.setUserInfo(user,idUser.toString());
  }

}
