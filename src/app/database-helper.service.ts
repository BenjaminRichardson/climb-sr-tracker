import { Injectable } from '@angular/core';
import { MatchData } from './match-data';
import { DateService } from './date.service';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import PouchDB from 'pouchdb';

export class MatchDataDB{
  _id: string;
  srGain: number;
  sr:number;

  constructor(match: MatchData){
    this._id = match.dateTime;
    this.sr = match.sr;
    this.srGain = match.srGain;
  }
}

@Injectable()
export class DatabaseHelperService {

  private dummy : MatchData[] = [];
  private dataBaseName: string = "dummy DB"; // TODO: param this and store elsewhere
  private database;

  constructor(private dateService: DateService,) { 
    this.database = new PouchDB(this.dataBaseName);
  }

  getMostRecentMatch():null|MatchData{
    let recentSr = null;
    this.database.allDocs({'limit':1}).then((matchEntry) => {
      if(matchEntry){
        recentSr = matchEntry.sr;
      }
    });
    return recentSr;

  }

  putMatchData(sr: number, difference:number){
    const dateTime = this.dateService.getDateTimeString();
    const newMatch = new MatchData(dateTime, sr, difference);

    this.dummy.push(newMatch);
    console.log(this.dummy);
  }

  getMatchRecords(){
    console.debug("trying to get records.");
    return of(this.database.allDocs());
  }

  createMatchJSON

}
