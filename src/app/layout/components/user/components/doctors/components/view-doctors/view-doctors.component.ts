import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss']
})
export class ViewDoctorsComponent implements OnInit {
  step = 0;
  form:FormGroup
  institution

  constructor(private fb:FormBuilder,private doctorsService:DoctorsService,@Inject(MAT_DIALOG_DATA) public data:any) { 
    this.institution = data.institution
  }

  ngOnInit(): void {

  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
