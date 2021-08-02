import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SubscriptionPlanService} from './../../../../../../../services/subscription-plan.service'
@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss'],
})
export class AddSubscriptionComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private plan:SubscriptionPlanService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      for: ['', [Validators.required]], // recommended for
      amount_per_month: ['', [Validators.required]], // money
      amount_per_year: ['', [Validators.required]], // money
      features: this.fb.group({
        patients: this.fb.group({
          count: ['', [Validators.required]],
          foreach_extra: [''],
          foreach_extra_monthly_amount: [''],
          foreach_extra_annual_amount: [''],
        }),
        doctors: this.fb.group({
          count: ['', [Validators.required]],
          foreach_extra: [''],
          foreach_extra_monthly_amount: [''],
          foreach_extra_annual_amount: [''],
        }),
        admins: this.fb.group({
          count: ['', [Validators.required]],
          foreach_extra: [''],
          foreach_extra_monthly_amount: [''],
          foreach_extra_annual_amount: [''],

        }),
        files: this.fb.group({
          count: ['', [Validators.required]],
          foreach_extra: [''],
          foreach_extra_monthly_amount: [''],
          foreach_extra_annual_amount: [''],
        }),
        notes: this.fb.group({ available: [false, [Validators.required]] }),
        payments: this.fb.group({ available: [false, [Validators.required]] }),
        schedules: this.fb.group({ available: [false, [Validators.required]] }),
        reminders: this.fb.group({ available: [false, [Validators.required]] }),
        analytics:['', [Validators.required]],
      }),
    });
  }

  onSubmit() {

    this.plan.addPlan(this.form.value)

  }
}
