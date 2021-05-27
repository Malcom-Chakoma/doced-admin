import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {
form:FormGroup

  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private subscriptionsService:SubscriptionsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      duration:[this.data.duration,[Validators.required]],
      // expiry_date:[this.data.expiry_date,[Validators.required]],
      amount:[this.data.amount,[Validators.required]],
      institution_name:[this.data.institution_name,[Validators.required]]

    })
    // this.form.disable()
  }

  onSubmit(){

    this.subscriptionsService.updateSubscription(this.data._id, this.form.value)

  }
}
