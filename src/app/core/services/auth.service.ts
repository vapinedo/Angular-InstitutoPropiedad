import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class AuthService {

  private UserArr: User[]; 
  private collection = 'users';
  private endPoint = 'https://portafolioangular-135a6.firebaseio.com';

  constructor(private http: HttpClient) { }


  login(user: User) {
      console.log(user);
  }
}