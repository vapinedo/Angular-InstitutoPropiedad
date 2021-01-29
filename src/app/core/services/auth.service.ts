import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class AuthService {

  private UserArr: User[]; 
  private collection = 'users';
  private endPoint = 'https://portafolioangular-135a6.firebaseio.com';

  constructor(
    private http: HttpClient,
    private storageSvc: StorageService
  ) { }


  login(user: User): void {
    this.storageSvc.setItem('user', user);
  }
}