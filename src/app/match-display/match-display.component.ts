import { Component, OnInit } from '@angular/core';
import { MatchDataManagerService } from '../match-data-manager.service';
import { MatchData } from '../match-data';


@Component({
  selector: 'app-match-display',
  templateUrl: './match-display.component.html',
  styleUrls: ['./match-display.component.css']
})
export class MatchDisplayComponent implements OnInit {

  records: MatchData[];

  constructor(private matchDataManager: MatchDataManagerService) { }

  ngOnInit() {
    this.getRecords();
  } 

  getRecords(): void{
    this.matchDataManager.getMatchRecords()
        .subscribe( records => this.records = records );
  }

  getWLDClass(match: MatchData) : string{
    let classString = "";
    if(match.srGain<0){
      classString += "LOSS";
    }else if(match.srGain == 0){
      classString += "DRAW";
    }else{
      classString += "WIN";
    }
    return classString;
  }

}
