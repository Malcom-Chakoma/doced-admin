import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecialisationsComponent } from './view-specialisations.component';

describe('ViewSpecialisationsComponent', () => {
  let component: ViewSpecialisationsComponent;
  let fixture: ComponentFixture<ViewSpecialisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecialisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecialisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
