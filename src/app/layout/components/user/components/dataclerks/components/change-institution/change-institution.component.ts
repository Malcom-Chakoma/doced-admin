import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Institution } from 'src/app/models/institution.model';
import { DataclerkService } from 'src/app/services/dataclerk.service';
import { InstitutionsService } from 'src/app/services/institutions.service';

@Component({
  selector: 'app-change-institution',
  templateUrl: './change-institution.component.html',
  styleUrls: ['./change-institution.component.scss']
})
export class ChangeInstitutionComponent implements OnInit {

  filtered_institutions = []
  institution = []
  form:FormGroup

  constructor(private dialog:MatDialog,private fb:FormBuilder,private dataclerkService:DataclerkService,private institutionsService:InstitutionsService,@Inject (MAT_DIALOG_DATA) public data:any) {
    institutionsService.institutions$.subscribe((institutions)=>{
      console.log(institutions)
      this.institution = institutions
      this.filtered_institutions = institutions
    })
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      // user_type:"data-clerk",
      institution: ['', [Validators.required]],
    });

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
   onSubmit(){
    this.dataclerkService.updateDataClerk(this.data._id,this.form.value)
  }
}
