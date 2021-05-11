import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Procedure } from 'src/app/models/procedure.model';
import { ProcedureService } from 'src/app/services/procedure.service';

@Component({
  selector: 'app-view-procedure',
  templateUrl: './view-procedure.component.html',
  styleUrls: ['./view-procedure.component.scss']
})
export class ViewProcedureComponent implements OnInit {

  form:FormGroup
  constructor(private fb:FormBuilder, private procedureService:ProcedureService, @Inject(MAT_DIALOG_DATA) public data:Procedure) {

    
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      procedure_name:[this.data.procedure_name,[Validators.required]],
      type:[this.data.type,[Validators.required]],
      status:[this.data.status,[Validators.required]]
    })
    this.form.disable()
  }
  onSubmit(){
    this.procedureService.updateProcedure(this.data._id,this.form.value)

  }

}
