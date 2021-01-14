import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  private itemsArr = []; 
  private endPoint = 'https://portafolioangular-135a6.firebaseio.com/';

  constructor( 
    private http: HttpClient, 
  ) { }

  getAll(collection: string): Observable<any[]> {
    return this.http.get(`${ this.endPoint }/${ collection }.json`)
      .pipe(
        map(( response ) => {
          this.itemsArr = this.createArray( response );
          return this.itemsArr;
        })
      );
  }    

  getOne(id: string, collection: string): Observable<Object> {
    return this.http.get(`${ this.endPoint }/${ collection }/${ id }.json`);
  }

  create(item: any, collection: string): Observable<Object> {
    return this.http.put( `${ this.endPoint }/${ collection }/${ item.id }.json`, item );
  }

  update(item: any, collection: string): Observable<Object> {
    return this.http.put(`${ this.endPoint }/${ collection }/${ item.id }.json`, item);
  }  

  private createArray( itemsObj: object ): any[] {
    if ( itemsObj === null ) { return []; }

    const itemsArr = [];
    Object.values( itemsObj ).forEach( value => {
      const item = value;
      itemsArr.push(item);
    });
    return itemsArr;
  }

  delete(id: string, collection: string) {
    return this.http.delete(`${ this.endPoint }/${ collection }/${ id }.json`);
  }

}