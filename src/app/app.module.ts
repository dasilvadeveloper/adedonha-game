import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColumnComponent } from './components/column/column.component';
import { FormsModule } from '@angular/forms';
import { RoundComponent } from './components/round/round.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
