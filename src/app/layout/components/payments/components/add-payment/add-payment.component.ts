import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  institution = []
  plans = []
  filtered_institutions = this.institution;
 

  constructor(
    private fb: FormBuilder,
    private subscriptionsService: SubscriptionsService,
    private subscriptionsplanService: SubscriptionPlanService,

    private institutionsService: InstitutionsService
  ) {
    institutionsService.institutions$.subscribe((institutions) => {
      this.institution = institutions
      this.filtered_institutions = institutions
    });

    subscriptionsplanService.subscription_plans$.subscribe((plans) =>{
      console.log(plans)
      this.plans = plans
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      duration: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      plan: ['',[Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.subscriptionsService.addSubscription(this.form.value);
  }
  filterOptions(value:string){
    console.log(value)
     if(value){
       this.filtered_institutions = this.institution.filter((institution:Institution)=>{
         console.log(institution)
        return institution.institution_name.toLocaleLowerCase().match(value.toLocaleLowerCase())
     
       })
       
     }
     else{
       this.filtered_institutions = this.institution;
     }
   
   }
}
