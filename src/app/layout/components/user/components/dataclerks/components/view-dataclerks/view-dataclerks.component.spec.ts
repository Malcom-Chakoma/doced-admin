import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataclerksComponent } from './view-dataclerks.component';

describe('ViewDataclerksComponent', () => {
  let component: ViewDataclerksComponent;
  let fixture: ComponentFixture<ViewDataclerksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDataclerksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataclerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
