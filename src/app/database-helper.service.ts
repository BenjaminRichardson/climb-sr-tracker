import { Injectable } from '@angular/core';
import { MatchData } from './match-data';
import { DateService } from './date.service';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import PouchDB from 'pouchdb';

export interface MatchDataDB{
  _id: string;
  srGain: number;
  sr:number;
}

@Injectable()
export class DatabaseHelperService {

  private dummy : MatchData[] = [];
  private dataBaseName: string = "dummy DB"; // TODO: param this and store elsewhere
  private database;
  private pageSize = 30;

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

    this.database.put(this.createMatchDataDB(newMatch));
  }

  //returns the specified number of match Records
  getMatchRecords(limit?: number, startIndex?: string): Promise<MatchData[]> {
    let options = {include_docs : true}; 
    if(limit && limit > 0){
      options["limit"] = limit;
    }
    if(startIndex){
      options["startkey"] = startIndex;
    }

    let promise = this.database.allDocs(options)
    .then(
      (result) : MatchData[] => {
        let matchData:MatchData[] = result.rows.map(
          (match) => {
            return new MatchData(match.doc._id, match.doc.sr, match.doc.srGain);
          });
        return matchData;
    });
    return promise;
  }

  createMatchDataDB(match:MatchData):MatchDataDB{
    return {
      _id : match.dateTime,
      sr : match.sr,
      srGain : match.srGain
    }
  }

  getChangesEmitter(){
    return this.database.changes();
  }

}
