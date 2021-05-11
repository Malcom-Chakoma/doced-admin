import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalAidComponent } from './view-medical-aid.component';

describe('ViewMedicalAidComponent', () => {
  let component: ViewMedicalAidComponent;
  let fixture: ComponentFixture<ViewMedicalAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMedicalAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicalAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
