import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Admin } from './../models/admin.model';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root',
})
export class UsersService {


  admins$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.getAdmins();
  }
  getAdmins() {
    this.http.get(environment.api_url + 'admins').subscribe(
      (admins: any) => {
        let admns = admins.filter((admin) => {
          return admin._id !== this.authService.SessionUser._id;
        });
        this.admins$.next(admns);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addUser(value: Admin) {
    value.timestamp = +new Date();
    this.http.post(environment.api_url + 'admins', value).subscribe(
      (users) => {
        this.getAdmins();
        this.dialog.closeAll();
        this.notificationService.successNotification('Admin Added');
      },
      (error) => {
        console.log(error);
        this.notificationService.errorNotification(error.message);
      }
    );
  }

  updateAdmin(id: string, value: any) {
    this.http.put(environment.api_url + 'admins/'+ id,value).subscribe(
      (users) => {
        this.getAdmins();
        this.dialog.closeAll()
        this.notificationService.successNotification('Admin Updated');
      },
      ({error}) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }

  deleteUser(id: any) {
    this.http.delete(environment.api_url + 'admins/'+ id).subscribe(
      (users) => {
        this.getAdmins();
        this.notificationService.successNotification('Admin deleted');
      },
      ({error}) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
}
