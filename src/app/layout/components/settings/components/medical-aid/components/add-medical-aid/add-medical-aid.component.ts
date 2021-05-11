import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MedicalAidService} from './../../../../../../../services/medical-aid.service'

@Component({
  selector: 'app-add-medical-aid',
  templateUrl: './add-medical-aid.component.html',
  styleUrls: ['./add-medical-aid.component.scss']
})
export class AddMedicalAidComponent implements OnInit {
  form:FormGroup
  constructor(private fb:FormBuilder,private medicalAidService:MedicalAidService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      medical_aid_name:['',[Validators.required]],
      status:['',[Validators.required]],
    })
  }

  onSubmit(){
    this.medicalAidService.addMedicalAid(this.form.value)
  }

}
