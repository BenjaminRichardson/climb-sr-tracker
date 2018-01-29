import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MatchInputComponent } from './match-input/match-input.component';
import { MatchDataManagerService } from './match-data-manager.service';
import { DateService } from './date.service';
import { DatabaseHelperService } from './database-helper.service';
import { MatchDisplayComponent } from './match-display/match-display.component';
import { WinLossPipe } from './win-loss.pipe';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MatchInputComponent,
    MatchDisplayComponent,
    WinLossPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [MatchDataManagerService,DateService,DatabaseHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
