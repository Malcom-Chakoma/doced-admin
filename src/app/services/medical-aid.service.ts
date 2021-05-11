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
export class MedicalAidService {
  medical_aids$ = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService:AuthService
  ) {
    this.getMedicalAid();
  }
  addMedicalAid({ medical_aid_name, status }) {

    const {_id,first_name,last_name} = this.authService.SessionUser
    let md = {
      admin_id: _id,
      medical_aid_name: medical_aid_name,
      status: status,
      sort_index: 0,
      saved_by:first_name +' '+ last_name,
      created_timestamp: +new Date(),
      modified_records: [],
      original_record: {},
      delete: false,
    };
    this.http.post(environment.api_url + 'medicalAids', md).subscribe(
      (medical_aid) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('medical aid Added');
        this.getMedicalAid();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
  getMedicalAid() {
    this.http.get(environment.api_url + 'medicalAids').subscribe(
      (medical_aids) => {
        this.medical_aids$.next(medical_aids);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateMedicalAid(id, value) {
    this.http.put(environment.api_url + 'medicalAids/'+id, value).subscribe(
      (medical_aid) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('medical aid Updated');
        this.getMedicalAid();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
  deleteMedicalAid(id) {
    this.http.delete(environment.api_url + 'medicalAids/'+id).subscribe(
      (medical_aid) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('medical aid deleted');
        this.getMedicalAid();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
}
