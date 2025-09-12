import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatError, MatHint } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-baner',
  imports: [MatError, MatIcon, MatHint],
  templateUrl: './baner.html',
  styleUrl: './baner.scss'
})
export class Baner {
  @Output() closeEvent = new EventEmitter<boolean>();
  @Input()success: boolean = true;
  @Input() msg: string = '';
  close() {
    this.closeEvent.emit(true);
  }
}
