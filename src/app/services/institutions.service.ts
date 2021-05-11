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
export class InstitutionsService {
  institutions$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private notificationservice: NotificationService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.getInstitutions();
  }
  getInstitutions() {
    this.http.get(environment.api_url + 'Institutions').subscribe(
      (institutions) => {
        this.institutions$.next(institutions);
      },
      ({ error }) => {
        this.notificationservice.errorNotification(error.message);
      }
    );
  }
}
