import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  users$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {
    this.getUsers();
  }
  getUsers(){
    this.http.get(environment.api_url + 'users').subscribe((users)=>{
      this.users$.next(users)
    },
    ({error})=>{
      this.notificationService.errorNotification(error.message)
    })
  }
}
