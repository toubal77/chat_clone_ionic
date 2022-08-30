import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
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
    this.authService.loginUser(email, password).then(
      ()=>{
        this.router.navigateByUrl('home');
      },
      (error)=>{
        this.errorMessage = error;
      }
    );
  }

}
