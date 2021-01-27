import { Injectable } from '@angular/core';

@Injectable()
export class DatetimeService {

  constructor() { }

  getUnixTime(): number {
    const unixTime = new Date().getTime();
    return unixTime;
  }

  unixTimeToDate(unixTime: number) {
    const miliseconds = unixTime * 1000;
    const dateObject = new Date(miliseconds);
    return dateObject;
  }

  
}
