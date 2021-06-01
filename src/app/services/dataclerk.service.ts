import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class DataclerkService {
  dataclerk$ = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService:AuthService
  ) { 
    this.getDataClerk();
  }

  addDataClerk(value: User) {
    value.timestamp = +new Date();
    this.http.post(environment.api_url + 'users/dataclerk', value).subscribe(
      (users) => {
        this.getDataClerk();
        this.dialog.closeAll();
        this.notificationService.successNotification('DataClerk Added');
      },
      (error) => {
        console.log(error);
        this.notificationService.errorNotification(error.message);
      }
    );
  }
  getDataClerk() {
    this.http.get(environment.api_url + 'users/data-clerks').subscribe(
      (dataclerk) => {
        this.dataclerk$.next(dataclerk);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateDataClerk(id, value) {
    this.http.put(environment.api_url + 'users/'+id, value).subscribe(
      (dataclerk) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('dataClerk Updated');
        this.getDataClerk();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
  deleteDataClerk(id) {
    this.http.delete(environment.api_url + 'users/data-clerks'+id).subscribe(
      (dataclerk) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('dataClerk deleted');
        this.getDataClerk();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
}
