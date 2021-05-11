import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataclerksComponent } from './add-dataclerks.component';

describe('AddDataclerksComponent', () => {
  let component: AddDataclerksComponent;
  let fixture: ComponentFixture<AddDataclerksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataclerksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataclerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
