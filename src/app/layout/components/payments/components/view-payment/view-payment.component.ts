import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstitutionsService } from 'src/app/services/institutions.service';
import { SubscriptionPlanService } from 'src/app/services/subscription-plan.service';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {
form:FormGroup
  institution = []
  plans = []
  calculated_amount = 0

  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private subscriptionsService:SubscriptionsService,private institutionsService:InstitutionsService, private subscriptionsplanService:SubscriptionPlanService) { 
    subscriptionsplanService.subscription_plans$.subscribe((plans) =>{
      this.plans = plans
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      duration:[this.data.duration,[Validators.required]],
      // expiry_date:[this.data.expiry_date,[Validators.required]],
      plan: [this.data.name,[Validators.required]],

      amount:[this.data.amount,[Validators.required]],
      // institution_name:[this.data.institution_name,[Validators.required]]

    })
    // this.form.disable()

    this.form.controls['duration'].valueChanges.subscribe(x=>{
      
      this.calculate_amount(this.form.value.plan)})

    this.form.controls['plan'].valueChanges.subscribe(x=>{
      this.calculate_amount(x)
    })

  }

  calculate_amount(plan){
    
    if(plan != null){
      if(this.form.value.duration === 'monthly'){
        this.calculated_amount = plan.amount_per_month
      }else
      {
        this.calculated_amount = plan.amount_per_year
      }
    }
  }

  onSubmit(){
    this.form.value.amount = this.calculated_amount
    this.subscriptionsService.updateSubscription(this.data._id, this.form.value)

  }
}
