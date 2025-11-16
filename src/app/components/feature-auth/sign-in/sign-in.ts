import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(true)
  });

  onSubmit(){
    console.log("Coming from SignInForm:-", this.signInForm)
    console.log("Coming from SignInForm Value:-", this.signInForm.value)
    console.log("Coming from SignInForm InValide & Valid:-", this.signInForm.invalid, this.signInForm.valid)
  }
}