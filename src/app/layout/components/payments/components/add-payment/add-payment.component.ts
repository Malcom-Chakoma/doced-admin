import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Institution } from 'src/app/models/institution.model';
import { InstitutionsService } from 'src/app/services/institutions.service';
import { SubscriptionPlanService } from 'src/app/services/subscription-plan.service';
import { SubscriptionsService } from '../../../../../services/subscriptions.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss'],
})
export class AddPaymentComponent implements OnInit {

  form: FormGroup
  calculated_amount = 0
  institution = []
  plans = []
 

  constructor(
    private fb: FormBuilder,
    private subscriptionsService: SubscriptionsService,
    private subscriptionsplanService: SubscriptionPlanService,

    private institutionsService: InstitutionsService
  ) {
    institutionsService.institutions$.subscribe((institutions) => {
      console.log(institutions)
      this.institution = institutions
    });

    subscriptionsplanService.subscription_plans$.subscribe((plans) =>{
      this.plans = plans
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      duration: ['', [Validators.required]],
      // expiry_date: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      plan: [null,[Validators.required]],
      amount: ['', [Validators.required]],
    });
    this.form.controls['duration'].valueChanges.subscribe(x=>{
      
      this.calculate_amount(this.form.value.plan)})

    this.form.controls['plan'].valueChanges.subscribe(x=>{
      console.log(x)
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

  onSubmit() {
    this.form.value.amount = this.calculated_amount
    console.log(this.form.value)
    this.subscriptionsService.addSubscription(this.form.value);
    
  }
}
