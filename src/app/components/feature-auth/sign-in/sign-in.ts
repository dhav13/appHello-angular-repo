import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStrengthPattern } from '../../../core/Validators/passwordValidator';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, passwordStrengthPattern()]),
    rememberMe: new FormControl(true)
  }); //this entire code can be done using form builder - DIY

  constructor(){}

  ngOnInit(): void {
    console.log(this.getSignInForm)
    setTimeout(() => {
      this.setFormData()
    },3000)

    setTimeout(() => {
      this.updateRememberMe()
    }, 5000)

    this.onFormValueChanges();
  }

  get getSignInForm(): any {
    return this.signInForm.controls;
  }

  onSubmit() {
    console.log("Coming from SignInForm:-", this.signInForm)
    console.log("Coming from SignInForm Value:-", this.signInForm.value)
    console.log("Coming from SignInForm InValide & Valid:-", this.signInForm.invalid, this.signInForm.valid)
    //this.signInForm.reset()
    this.signInForm.markAsPristine()
    this.signInForm.markAsUntouched()
  }

  onFormValueChanges() {
    console.log("On form value changes")
    this.signInForm.valueChanges.subscribe(res => {
      if(res.email){
        console.log(res.email)
      }else if(res.password)
        console.log(res.password)
    })
  }

  setFormData(){
    this.signInForm.patchValue({
      email: "test@default.com",
      password: "why pass coming from API??",
      rememberMe: true
    })
  }

  updateRememberMe(){
   this.signInForm.get('rememberMe')?.setValue(false);
  }
}