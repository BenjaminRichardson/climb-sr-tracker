import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  getDateTimeISO():string{
    return new Date().toISOString();
  }

  getDateTime():string{
    return this.getDateTimeISO();
  }

}
