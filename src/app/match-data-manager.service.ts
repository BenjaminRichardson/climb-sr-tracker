import { Injectable } from '@angular/core';
import { DateService } from './date.service';
import { DatabaseHelperService } from './database-helper.service';

import { Observable } from 'rxjs/Observable';

import { MatchData } from './match-data';

@Injectable()
export class MatchDataManagerService {

  constructor(private databaseHelper: DatabaseHelperService) { 
  }

  storeMatchRecord(sr: number):void{
    //get last SR
    const lastMatch = this.databaseHelper.getMostRecentMatch();
    //calculate difference
    const difference = (lastMatch === null || lastMatch === undefined)? 0: sr - lastMatch.sr  ;
    //put this in database
    this.databaseHelper.putMatchData(sr, difference);
  }

  // Retrieves up to 20 
  getMatchRecords(): Promise<MatchData[]>{
    return this.databaseHelper.getMatchRecords();
  }

}
