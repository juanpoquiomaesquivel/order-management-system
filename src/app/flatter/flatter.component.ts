import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flatter } from '../Flatter.model';
import { MatDialog } from '@angular/material/dialog';
import { FlatterFormComponent } from '../flatterform/flatterform.component';

@Component({
  selector: 'app-flatter',
  templateUrl: './flatter.component.html',
  styleUrls: ['./flatter.component.css'],
})
export class FlatterComponent {
  constructor(private matDialog: MatDialog) {}

  @Input() flatterOfList: Flatter;
  @Input() indexOfList: number;

  @Output()
  onClikDeleteFlatter: EventEmitter<number> = new EventEmitter<number>();

  clickOpenEditFlatterDialog() {
    this.matDialog.open(FlatterFormComponent, {
      width: '500px',
      data: {
        dataKey: this.flatterOfList,
      },
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }

  clickDeleteFlatter() {
    this.onClikDeleteFlatter.emit(this.indexOfList);
  }
}
