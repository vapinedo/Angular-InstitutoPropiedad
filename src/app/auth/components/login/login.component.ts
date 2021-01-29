import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../core/services/dialog.service';
import { DatetimeService } from 'src/app/core/services/datetime.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  public loginForm: FormGroup;
  public subscription = new Subscription();
  public logo = '../../../assets/img/logo.png';
  public bgImage = '../../../assets/img/bg-login.jpg';
  readonly VALID_EMAIL_STRING = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( 
    private router: Router,
    private fb: FormBuilder,
    private userSvc: UserService,
    private authSvc: AuthService,
    private dialogSvc: DialogService,
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
 
      this.subscription = this.userSvc.getAll()
        .subscribe({
          next: userArr => {
            const user = this.findUserByEmailAndPassword(userArr, email, password);
            user ? this.authSvc.login(user) : console.log('Usuario o password incorrectos');
          },
          error: err => this.dialogSvc.error(err),
          complete: () => console.log('Task complete!')
        }); 
    }
    return;
  }

  private findUserByEmailAndPassword(users: User[], email: string, password: string): User | undefined {
    return users.find(user => user.email === email && user.password === password);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}