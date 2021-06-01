import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Institution } from 'src/app/models/institution.model';
import { DataclerkService } from 'src/app/services/dataclerk.service';
import {User} from './../../../../../../../models/user.model'


@Component({
  selector: 'app-view-dataclerks',
  templateUrl: './view-dataclerks.component.html',
  styleUrls: ['./view-dataclerks.component.scss']
})
export class ViewDataclerksComponent implements OnInit {
  form:FormGroup
  institution = []
  filtered_institutions = []
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private dataclerkService:DataclerkService) {
    console.log(this.data.user)
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['this.data.first_name', [Validators.required]],
        last_name: ['this.data.last_name', [Validators.required]],
        email: ['this.data.email', [Validators.required,Validators.email]],
        phone_number: ['this.data.phone_number', [Validators.required]],
        institution: ['this.data.institution', [Validators.required]],
        password: ['123456789', [Validators.required]],
    })
    this.form.disable()
  }

  onSubmit(){

    this.dataclerkService.updateDataClerk(this.data._id, this.form.value)

  }

  filterOptions(value:string){
    console.log(value)
     if(value){
       this.filtered_institutions = this.institution.filter((institution:Institution)=>{
        return institution.institution_name.toLocaleLowerCase().match(value.toLocaleLowerCase())
     
       })
     }
     else{
       this.filtered_institutions = this.institution
     }
   
   }

}
