import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatterComponent } from './flatter.component';

describe('FlatterComponent', () => {
  let component: FlatterComponent;
  let fixture: ComponentFixture<FlatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
