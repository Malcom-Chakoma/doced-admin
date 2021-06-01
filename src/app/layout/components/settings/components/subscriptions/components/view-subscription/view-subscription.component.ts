import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionPlanService } from 'src/app/services/subscription-plan.service';
import {Plan} from './../../../../../../../models/plan.model'

@Component({
  selector: 'app-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrls: ['./view-subscription.component.scss']
})
export class ViewSubscriptionComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private plan:SubscriptionPlanService,@Inject(MAT_DIALOG_DATA) public data:Plan) { }


  ngOnInit(): void {
    const {features} = this.data
    this.form = this.fb.group({
      name: [this.data.name, [Validators.required]],
      for: [this.data.for, [Validators.required]], // recommended for
      amount_per_month: [this.data.amount_per_month, [Validators.required]], // money
      amount_per_year: [this.data.amount_per_year, [Validators.required]], // money
      features: this.fb.group({
        patients: this.fb.group({
          count: [features.patients.count, [Validators.required]],
          foreach_extra: [features.patients.foreach_extra, [Validators.required]],
          foreach_extra_monthly_amount: [features.patients.foreach_extra_monthly_amount, [Validators.required]],
          foreach_extra_annual_amount: [features.patients.foreach_extra_annual_amount, [Validators.required]],

        }),
        doctors: this.fb.group({
          count: [features.doctors.count, [Validators.required]],
          foreach_extra: [features.doctors.foreach_extra, [Validators.required]],
          foreach_extra_monthly_amount: [features.doctors.foreach_extra_monthly_amount, [Validators.required]],
          foreach_extra_annual_amount: [features.doctors.foreach_extra_annual_amount, [Validators.required]],
        }),
        admins: this.fb.group({
          count: [features.admins.count, [Validators.required]],
          foreach_extra: [features.admins.foreach_extra, [Validators.required]],
          foreach_extra_monthly_amount: [features.admins.foreach_extra_monthly_amount, [Validators.required]],
          foreach_extra_annual_amount: [features.admins.foreach_extra_annual_amount, [Validators.required]],
        }),
        files: this.fb.group({
          count: [features.files.count, [Validators.required]],
          foreach_extra: [features.files.foreach_extra, [Validators.required]],
          foreach_extra_monthly_amount: [features.files.foreach_extra_monthly_amount, [Validators.required]],
          foreach_extra_annual_amount: [features.files.foreach_extra_annual_amount, [Validators.required]],
        }),
        notes: this.fb.group({ available: [features.notes.available, [Validators.required]] }),
        payments: this.fb.group({ available: [features.payments.available, [Validators.required]] }),
        schedules: this.fb.group({ available: [features.schedules.available, [Validators.required]] }),
        reminders: this.fb.group({ available: [features.reminders.available, [Validators.required]] }),
        analytics: [this.data.features.analytics, [Validators.required]],
      }),
    });
    this.form.disable()
  }

  onSubmit() {

    this.plan.updatePlan(this.data._id, this.form.value)

  }

}
