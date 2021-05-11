import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalAidService } from 'src/app/services/medical-aid.service';
import {MedicalAid} from './../../../../../../../models/medical-aid.model'

@Component({
  selector: 'app-view-medical-aid',
  templateUrl: './view-medical-aid.component.html',
  styleUrls: ['./view-medical-aid.component.scss']
})
export class ViewMedicalAidComponent implements OnInit {
  form:FormGroup
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:MedicalAid, private medicalAidService:MedicalAidService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      medical_aid_name:[this.data.medical_aid_name,[Validators.required]],
      status:[this.data.status,[Validators.required]],
    })
    this.form.disable()
  }

  onSubmit(){

    this.medicalAidService.updateMedicalAid(this.data._id, this.form.value)

  }

}
