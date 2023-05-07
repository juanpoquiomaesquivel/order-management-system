import { Component, OnInit } from '@angular/core';
import { FlatterFormComponent } from '../flatterform/flatterform.component';
import { MatDialog } from '@angular/material/dialog';
import { Flatter } from '../Flatter.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  openDialog() {
    this.matDialog.open(FlatterFormComponent, {
      width: '500px',
    });
  }

  listOfFlatters: Flatter[] = [
    new Flatter(70, 'pavo', 71, 'example1'),
    new Flatter(60, 'chancho', 61, 'example2'),
  ];

  ngOnInit(): void {
    // this.indexOfFlatter = this.route.snapshot.params['id'];
  }

  deleteFlatter(indexOfFlatter: number) {
    this.listOfFlatters.splice(indexOfFlatter, 1);
  }
}
