import { Component, OnInit } from '@angular/core';
import { MatchDataManagerService } from '../match-data-manager.service';


@Component({
  selector: 'app-match-input',
  templateUrl: './match-input.component.html',
  styleUrls: ['./match-input.component.css']
})
export class MatchInputComponent implements OnInit {

  private sr: number;

  constructor(private matchDataManager: MatchDataManagerService) { }

  ngOnInit() {
  }

  storeMatchRecord():void{
    if(this.sr !== undefined){
      this.matchDataManager.storeMatchRecord(this.sr);
    }
    this.sr = undefined;
  }

}
