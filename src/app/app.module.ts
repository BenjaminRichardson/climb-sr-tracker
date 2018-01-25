import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MatchInputComponent } from './match-input/match-input.component';
import { MatchDataManagerService } from './match-data-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    MatchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MatchDataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
