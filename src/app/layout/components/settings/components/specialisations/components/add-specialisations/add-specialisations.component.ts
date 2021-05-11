import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Procedure } from 'src/app/models/procedure.model';
import { ProcedureService } from 'src/app/services/procedure.service';
import { SpecialisationService } from 'src/app/services/specialisation.service';

@Component({
  selector: 'app-add-specialisations',
  templateUrl: './add-specialisations.component.html',
  styleUrls: ['./add-specialisations.component.scss']
})
export class AddSpecialisationsComponent implements OnInit {
   form:FormGroup
  procedures = [];
  filtered_procedures = [];
  constructor(private fb:FormBuilder,private specialisationService:SpecialisationService, private procedureService:ProcedureService) { 
    procedureService.procedures$.subscribe((procedures)=>{
      this.procedures = procedures
      this.filtered_procedures = procedures
    })
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      specialisation_name:['',[Validators.required]],
      procedures:['',[Validators.required]]
    })
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
    this.specialisationService.addSpecialisation(this.form.value)
  }



}
