import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class UserService {

  private UserArr: User[]; 
  private collection = 'users';
  private endPoint = 'https://portafolioangular-135a6.firebaseio.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get(`${this.endPoint}/${this.collection}.json`)
      .pipe(
        map((response) => {
          this.UserArr = this.createArray(response);
          return this.UserArr;
        })
      );
  }    

  getOne(id: string): Observable<Object> {
    return this.http.get(`${this.endPoint}/${this.collection}/${id}.json`);
  }

  create(user: User): Observable<Object> {
    return this.http.put(`${this.endPoint}/${this.collection}/${user.id}.json`, user);
  }

  update(user: User): Observable<Object> {
    return this.http.put(`${this.endPoint}/${this.collection}/${user.id}.json`, user);
  }  

  private createArray(customersObj: object): User[] {
    if (customersObj === null) { return []; }

    const UserArr = [];
    Object.values(customersObj).forEach(value => {
      const user = value;
      UserArr.push(user);
    });
    return UserArr;
  }

  delete(id: string) {
    return this.http.delete(`${this.endPoint}/${this.collection}/${id}.json`);
  }

}