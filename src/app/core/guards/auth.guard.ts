import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( 
    private router: Router,
    private authSvc: AuthService 
  ) {}
  
  canActivate(): boolean {
    const user = this.authSvc.userAuth(); 
    if(user === null) {
      this.router.navigateByUrl('/login');
      return false;
    } 
    return true;
  }

}