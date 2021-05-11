import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAidComponent } from './medical-aid.component';

describe('MedicalAidComponent', () => {
  let component: MedicalAidComponent;
  let fixture: ComponentFixture<MedicalAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
