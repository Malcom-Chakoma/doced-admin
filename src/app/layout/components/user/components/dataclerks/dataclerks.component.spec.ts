import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataclerksComponent } from './dataclerks.component';

describe('DataclerksComponent', () => {
  let component: DataclerksComponent;
  let fixture: ComponentFixture<DataclerksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataclerksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataclerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
