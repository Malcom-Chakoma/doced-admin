import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialisationsComponent } from './add-specialisations.component';

describe('AddSpecialisationsComponent', () => {
  let component: AddSpecialisationsComponent;
  let fixture: ComponentFixture<AddSpecialisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecialisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
