import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  getDateTimeISO():string{
    return new Date().toISOString();
  }

  getDateTimeString():string{
    return this.getDateTimeISO();
  }

}
