import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProcedureService} from './../../../../../../../services/procedure.service'

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.component.html',
  styleUrls: ['./add-procedure.component.scss']
})
export class AddProcedureComponent implements OnInit {
  
  form:FormGroup
  constructor(private fb:FormBuilder, private procedureService:ProcedureService) {

    
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      procedure_name:['',[Validators.required]],
      type:['',[Validators.required]],
      status:['',[Validators.required]]
    })
  }
  onSubmit(){
    this.procedureService.addProcedure(this.form.value)

  }

}
