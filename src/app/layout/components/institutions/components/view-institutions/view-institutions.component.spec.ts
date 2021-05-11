import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstitutionsComponent } from './view-institutions.component';

describe('ViewInstitutionsComponent', () => {
  let component: ViewInstitutionsComponent;
  let fixture: ComponentFixture<ViewInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});