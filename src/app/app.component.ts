import { Component, EventEmitter, Output } from '@angular/core';
import { Column } from './models/column.model';
import { Round, RoundValue, RoundValueI } from './models/round.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adedonha-game';
  total: number = 0;
  roundsNo: number = 1;
  roundIndex: number = 1;
  loadingCharacter: boolean = false;
  columns: RoundValue[] = [
    { topic: 'Animal', isValid: null as any, value: '' },
    { topic: 'City', isValid: null as any, value: '' },
    { topic: 'Vehicle', isValid: null as any, value: '' },
    { topic: 'Sport', isValid: null as any, value: '' },
    { topic: 'Fruit', isValid: null as any, value: '' },
    { topic: 'Country', isValid: null as any, value: '' },
  ];
  rounds: Round[] = [];
  character: string = '?';
  newRoundBtnEnabled:boolean = false;

  ngOnInit() {
    for (let i = 0; i < this.roundsNo; i++) {
      this.rounds.push({
        id: i + 1,
        values: this.columns.map((column) => ({ ...column })),
      });
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loadingRandomCharacter() {
    console.log(this.loadingCharacter);
    while (this.loadingCharacter) {
      this.character = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      await this.sleep(100);
    }
  }

  generateRandomCharacter() {
    this.loadingCharacter = true;
    this.loadingRandomCharacter();
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
      }, 2000);
    }).then((character) => {
      this.loadingCharacter = false;
      this.character = String(character);
    });
  }

  addRound() {
    this.roundIndex++;
    this.rounds.push({
      id: this.rounds[this.rounds.length - 1].id + 1,
      values: this.columns.map((column) => ({ ...column })),
    });
    this.newRoundBtnEnabled = false
  }

  updateTotal(newTotal: any) { 
    this.total += newTotal;
  }

  deleteCharacter() {
    this.character = '?';
  }

  canAddNewRound(can:any){
    this.newRoundBtnEnabled = can
  }
}
