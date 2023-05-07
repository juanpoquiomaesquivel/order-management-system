import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Flatter } from '../Flatter.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fuente',
  templateUrl: './flatterform.component.html',
  styleUrls: ['./flatterform.component.css'],
})
export class FlatterFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.flatterData = data;
  }

  flatterData: any;

  ngOnInit() {
    console.log(this.flatterData);
  }

  presas: string[] = ['chancho', 'pavo', 'pollo'];

  @Output()
  newFlatter: EventEmitter<Flatter> = new EventEmitter<Flatter>();

  saveFuenteDeCeviche() {
    let flatter = new Flatter(45, 'pavo', 44, 'proof of concept');
    this.newFlatter.emit(flatter);
  }
}
