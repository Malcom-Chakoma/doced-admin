import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specialisation } from '../models/specialisation.model';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class SpecialisationService {
  specialisations$ = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {
    this.getSpecialisations()
  }
  addSpecialisation(value: any) {

    const { _id, first_name, last_name } = this.authService.SessionUser
    let specialisation: Specialisation = {
      admin_id: _id,
      ...value,
      status: "active",
      saved_by: first_name + ' ' + last_name,
      timestamp: +new Date(),
      delete: false
    }

    this.http.post(environment.api_url + 'specialisations', specialisation).subscribe(
      (res) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('Specialisation added');
        this.getSpecialisations();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
  getSpecialisations() {
    this.http.get(environment.api_url + 'specialisations').subscribe(
      (res) => {
        this.specialisations$.next(res);
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
  updateSpecialisation(id, value) {
    this.http
      .put(environment.api_url + 'specialisations/' + id, value)
      .subscribe(
        (res) => {
          this.dialog.closeAll();
          this.notificationService.successNotification(
            'Specialisation updated'
          );
          this.getSpecialisations();
        },
        ({ error }) => {
          this.notificationService.errorNotification(error.message);
        }
      );
  }
  deleteSpecialisation(id) {
    this.http.delete(environment.api_url + 'specialisations/' + id).subscribe(
      (res) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('Specialisation deleted');
        this.getSpecialisations();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
      }
    );
  }
}
