import { Component } from '@angular/core';

import { v4 as uuidv4} from 'uuid';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatetimeService } from 'src/app/core/services/datetime.service';
import { AuthService } from '../../../core/services/auth.service';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared-styles.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public logo = '../../../assets/img/logo.png';
  public bgImage = '../../../assets/img/bg-login.jpg';
  readonly VALID_EMAIL_STRING = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( 
    private router: Router,
    private fb: FormBuilder,
    private authSvc: AuthService,
    private dialogSvc: DialogService,
    private datetimeSvc: DatetimeService
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
      let user = new User();
 
      user.id = uuidv4();
      user.email = email;
      user.password = password;
      user.createdAt = this.datetimeSvc.getUnixTime();
      user.lastLogin = user.createdAt;

      this.authSvc.create(user)
        .subscribe({
          next: data => console.log(data),
          error: err => this.dialogSvc.error(err),
          complete: () => this.router.navigateByUrl('/')
        }); 
    }
    return;
  }

}