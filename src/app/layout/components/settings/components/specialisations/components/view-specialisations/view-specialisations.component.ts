import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Procedure } from 'src/app/models/procedure.model';
import { ProcedureService } from 'src/app/services/procedure.service';
import { SpecialisationService } from 'src/app/services/specialisation.service';
import {Specialisation} from './../../../../../../../models/specialisation.model';
@Component({
  selector: 'app-view-specialisations',
  templateUrl: './view-specialisations.component.html',
  styleUrls: ['./view-specialisations.component.scss']
})
export class ViewSpecialisationsComponent implements OnInit {

  form:FormGroup
  procedures = [];
  filtered_procedures = [];
  constructor(private fb:FormBuilder,private specialisationService:SpecialisationService, private procedureService:ProcedureService, @Inject(MAT_DIALOG_DATA) public data:Specialisation) { 
    procedureService.procedures$.subscribe((procedures)=>{
      this.procedures = procedures
      this.filtered_procedures = procedures
    })
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      specialisation_name:[this.data.specialisation_name,[Validators.required]],
      procedures:[this.data.procedures,[Validators.required]]
    })
    this.form.disable()
  }

  filterOptions(value:string){
   console.log(value)
    if(value){
      this.filtered_procedures = this.procedures.filter((procedure:Procedure)=>{
       return procedure.procedure_name.toLocaleLowerCase().match(value.toLocaleLowerCase())
    
      })
    }
    else{
      this.filtered_procedures = this.procedures
    }
  
  }
  onSubmit(){
    this.specialisationService.updateSpecialisation(this.data._id,this.form.value)
  }


}
