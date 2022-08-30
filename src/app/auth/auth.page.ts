import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
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
    });
  }

  onSubmit(){
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    this.authService.createUser(email, password).then(
      ()=>{
        this.router.navigateByUrl('home');
      },
      (error)=>{
        this.errorMessage = error;
      }
    );
  }

}
