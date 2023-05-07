import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatterFormComponent } from './flatterform.component';

describe('FlatterFormComponent', () => {
  let component: FlatterFormComponent;
  let fixture: ComponentFixture<FlatterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
