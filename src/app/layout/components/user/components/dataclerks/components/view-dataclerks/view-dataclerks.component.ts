import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataclerkService } from 'src/app/services/dataclerk.service';

@Component({
  selector: 'app-view-dataclerks',
  templateUrl: './view-dataclerks.component.html',
  styleUrls: ['./view-dataclerks.component.scss']
})
export class ViewDataclerksComponent implements OnInit {
  form:FormGroup
  dataClerk
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private dataclerkService:DataclerkService) {
    this.dataClerk = data.dataClerks
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      dataclerk_name:[this.data.dataclerk_name,[Validators.required]],
      status:[this.data.status,[Validators.required]],
    })
    this.form.disable()
  }

  onSubmit(){

    this.dataclerkService.updateDataClerk(this.data._id, this.form.value)

  }

}
