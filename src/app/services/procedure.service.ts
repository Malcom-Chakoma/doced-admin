import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Procedure } from './../models/procedure.model';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ProcedureService {
  procedures$ = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {
    this.getProcedures();
  }
  addProcedure(value: any) {
    const { _id, first_name, last_name } = this.authService.SessionUser;
    let procedure: Procedure = {
      admin_id: _id,
      ...value,
      saved_by: first_name + ' ' + last_name,
      timestamp: +new Date(),
      delete: false,
    };
    this.http.post(environment.api_url + 'procedures', procedure).subscribe(
      (res) => {
        this.notificationService.successNotification('Procedure Saved');
        this.getProcedures();
        this.dialog.closeAll();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
  getProcedures() {
    this.http.get(environment.api_url + 'procedures').subscribe(
      (res) => {
        this.procedures$.next(res);
      },
      ({ error }) => {}
    );
  }

  updateProcedure(id,value) {
    this.http.put(environment.api_url + 'procedures/' + id,value).subscribe(
      (res) => {
        this.notificationService.successNotification('Procedure updated');
        this.getProcedures();
        this.dialog.closeAll();

      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
  deleteProcedure(id: any) {
    this.http.delete(environment.api_url + 'procedures/' + id).subscribe(
      (res) => {
        this.notificationService.successNotification('Procedure deleted');
        this.getProcedures();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
}
