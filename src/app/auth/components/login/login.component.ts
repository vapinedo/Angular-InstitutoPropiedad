import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared-styles.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public bgImage = '../../../assets/img/bg-login.jpg';
  readonly VALID_EMAIL_STRING = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( 
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(this.VALID_EMAIL_STRING)
      ]],
      password: ['', [
        Validators.required
      ]]
    });    
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }  

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(email, password); 
    }
    return;
  }

}