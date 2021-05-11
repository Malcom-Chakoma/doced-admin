import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalAidComponent } from './add-medical-aid.component';

describe('AddMedicalAidComponent', () => {
  let component: AddMedicalAidComponent;
  let fixture: ComponentFixture<AddMedicalAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicalAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
