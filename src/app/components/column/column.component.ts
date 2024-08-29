import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {

  @Input() rounds: number  = 5
  @Input() name: string = ''
  @Input() isTotalColumn: boolean = false



}
