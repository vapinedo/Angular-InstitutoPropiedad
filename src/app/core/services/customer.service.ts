import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/shared/models/customer.model';

@Injectable()
export class CustomerService {

  private customerArr: Customer[]; 
  private collection = 'customers';
  private endPoint = 'https://portafolioangular-135a6.firebaseio.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get(`${ this.endPoint }/${ this.collection }.json`)
      .pipe(
        map((response) => {
          this.customerArr = this.createArray(response);
          return this.customerArr;
        })
      );
  }    

  getOne(id: string): Observable<Object> {
    return this.http.get(`${ this.endPoint }/${ this.collection }/${ id }.json`);
  }

  create(customer: Customer): Observable<Object> {
    return this.http.put( `${ this.endPoint }/${ this.collection }/${ customer.id }.json`, customer);
  }

  update(customer: Customer): Observable<Object> {
    return this.http.put(`${ this.endPoint }/${ this.collection }/${ customer.id }.json`, customer);
  }  

  private createArray(customersObj: object): Customer[] {
    if ( customersObj === null ) { return []; }

    const customerArr = [];
    Object.values(customersObj).forEach( value => {
      const customer = value;
      customerArr.push(customer);
    });
    return customerArr;
  }

  delete(id: string) {
    return this.http.delete(`${ this.endPoint }/${ this.collection }/${ id }.json`);
  }

}