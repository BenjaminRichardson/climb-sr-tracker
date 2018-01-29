import { Injectable } from '@angular/core';
import { MatchData } from './match-data';
import { DateService } from './date.service';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseHelperService {

  private dummy : MatchData[] = [];

  constructor(private dateService: DateService,) { 
  }

  getMostRecentMatch():null|MatchData{
    let recentSr = null;
    if(this.dummy){
      recentSr = this.dummy[0];
    }
    console.log("got latest match!"+ recentSr)
    return (recentSr);

  }

  putMatchData(sr: number, difference:number){
    const dateTime = this.dateService.getDateTimeString();
    const newMatch = new MatchData(dateTime, sr, difference);

    this.dummy.push(newMatch);
    console.log(this.dummy);
  }

  getMatchRecords(){
    console.debug("trying to get records.");
    return of(this.dummy);
  }

}
