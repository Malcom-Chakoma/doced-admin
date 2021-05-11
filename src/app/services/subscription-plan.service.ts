import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {NotificationService} from './notification.service'

@Injectable({
  providedIn: 'root',
})
export class SubscriptionPlanService {
  subscription_plans$ = new BehaviorSubject(null);

  constructor(private http: HttpClient, private dialog: MatDialog, private notificationService:NotificationService) {
    this.getPlans();
  }

  getPlans() {
    this.http.get(environment.api_url + 'plans').subscribe(
      (plans) => {
        this.subscription_plans$.next(plans);

      },
      (error) => {
        console.log(error);
      }
    );
  }
  addPlan(plan: any) {
    this.http
      .post(environment.api_url + 'plans', { ...plan, timestamp: +new Date() })
      .subscribe(
        (plan) => {
          this.dialog.closeAll();
          this.notificationService.successNotification("Plan Added")
          this.getPlans();
          
        },
        ({error}) => {
          this.notificationService.errorNotification(error.message)
          console.log(error);
        }
      );
  }
  deletePlan(id) {
    this.http
    .delete(environment.api_url + `plans/${id}`)
    .subscribe(
      (plan) => {
        this.dialog.closeAll();
        this.notificationService.successNotification("Plan Deleted")
        this.getPlans();
      },
      ({error}) => {
        this.notificationService.errorNotification(error.message)
        console.log(error);
      }
    );
  }
  updatePlan(id, plan) {
  
    this.http
      .put(environment.api_url + `plans/${id}`, {
        ...plan,
        timestamp: +new Date(),
      })
      .subscribe(
        (plan) => {
          this.dialog.closeAll();
          this.notificationService.successNotification("Plan Updated")
          this.getPlans();
        },
        ({error}) => {
          this.notificationService.errorNotification(error.message)
          console.log(error);
        }
      );
  }
}
