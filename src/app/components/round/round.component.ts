import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from 'src/app/models/column.model';
import {
  Round,
  RoundValue,
  RoundValueI,
  ValidOptions,
} from 'src/app/models/round.model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css'],
})
export class RoundComponent {
  @Input() total: number = 5;
  @Input() index: number = 1;
  @Input() roundsNo: number = 0;
  @Input() columnNamesOnly: boolean = false;
  @Input() columns: RoundValue[] = null as any;
  @Input() round: Round = null as any;
  @Input() OnlyTotal: boolean = false;
  @Input() character: string = '';

  @Output() totalUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() canAddNewRound: EventEmitter<boolean> = new EventEmitter<boolean>();

  ifInvalidFieldAdd: number = 0;
  ifEqualFieldAdd: number = 5;
  ifValidFieldAdd: number = 10;

  ngOnInit() {}

  validateField(roundField: RoundValueI, isValid: ValidOptions) {
    switch (isValid) {
      case 'valid':
        roundField.isValid = 'valid';
        this.totalUpdated.emit(this.ifValidFieldAdd);
        this.total += this.ifValidFieldAdd;
        break;
      case 'equal':
        roundField.isValid = 'equal';
        this.totalUpdated.emit(this.ifEqualFieldAdd);
        this.total += this.ifEqualFieldAdd;
        break;
      case 'invalid':
        roundField.isValid = 'invalid';
        this.totalUpdated.emit(this.ifInvalidFieldAdd);
        this.total += this.ifInvalidFieldAdd;
        break;
      default:
        alert('ERROR');
        break;
    }

    this.validateIfCanAddNewRound();
  }

  validateIfCanAddNewRound() {
    console.log(this.round.values.every((value) => value.isValid != null));

    this.canAddNewRound.emit(
      this.round.values.every((value) => value.isValid != null)
    );
  }

  validateFirstChar(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.value) return;

    const firstChar = inputElement.value.trim().substring(0, 1)

    if (firstChar.toUpperCase() !== this.character.toUpperCase()) {
        inputElement.value = '';  // Limpa o campo de entrada se o caractere inicial não corresponder
    }
}

}
