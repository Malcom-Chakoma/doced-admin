import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Institution } from 'src/app/models/institution.model';
import { DataclerkService } from 'src/app/services/dataclerk.service';
import { InstitutionsService } from 'src/app/services/institutions.service';


@Component({
  selector: 'app-add-dataclerks',
  templateUrl: './add-dataclerks.component.html',
  styleUrls: ['./add-dataclerks.component.scss']
})
export class AddDataclerksComponent implements OnInit {
  form:FormGroup
  institution = []
  filtered_institutions = []
  constructor(private fb:FormBuilder,private dataclerkService:DataclerkService, private institutionsService:InstitutionsService) { 
    institutionsService.institutions$.subscribe((institutions)=>{
      this.institution = institutions
      this.filtered_institutions = institutions
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
        user_type:"data-clerk",
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        phone_number: ['', [Validators.required]],
        institution: ['', [Validators.required]],
        password: ['123456789', [Validators.required]],
      });
  }

  onSubmit(){
    this.dataclerkService.addDataClerk(this.form.value)
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
