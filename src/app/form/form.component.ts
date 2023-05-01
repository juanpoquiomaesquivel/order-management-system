import { Component } from '@angular/core';
import { FuenteComponent } from '../fuente/fuente.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

constructor(private matDialog:MatDialog) {}

  openDialog() {
    this.matDialog.open(FuenteComponent, {
      width: '500px',
    });
  }
}
