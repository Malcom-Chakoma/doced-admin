import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInstitutionComponent } from './change-institution.component';

describe('ChangeInstitutionComponent', () => {
  let component: ChangeInstitutionComponent;
  let fixture: ComponentFixture<ChangeInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
