import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscription } from '../models/subscription.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  subscription$ = new BehaviorSubject(null);

  constructor(private http: HttpClient, private dialog: MatDialog, private notificationService:NotificationService) { 
    this.getSubscription();
  }
  getSubscription() {
    this.http.get(environment.api_url + 'subscriptions').subscribe(
      (subscription) => {
        this.subscription$.next(subscription);

      },
      (error) => {
        console.log(error);
      }
    );
  }
  addSubscription(value: Subscription) {
    value.timestamp = +new Date();
    this.http.post(environment.api_url + 'subscriptions', value).subscribe(
      (subscription) => {
        this.getSubscription();
        this.dialog.closeAll();
        this.notificationService.successNotification('Subscription Added');
      },
      (error) => {
        console.log(error);
        this.notificationService.errorNotification(error.message);
      }
    );
  }

  deleteSubscription(id) {
    this.http
    .delete(environment.api_url + `subscriptions/${id}`)
    .subscribe(
      (subscription) => {
        this.dialog.closeAll();
        this.notificationService.successNotification("Subscription Deleted")
        this.getSubscription();
      },
      ({error}) => {
        this.notificationService.errorNotification(error.message)
        console.log(error);
      }
    );
  }
  updateSubscription(id, subscription) {
  
    this.http
      .put(environment.api_url + `subscriptions/${id}`, {
        ...subscription,
        timestamp: +new Date(),
      })
      .subscribe(
        (subscription) => {
          this.dialog.closeAll();
          this.notificationService.successNotification("Subscription Updated")
          this.getSubscription();
        },
        ({error}) => {
          this.notificationService.errorNotification(error.message)
          console.log(error);
        }
      );
  }
}
