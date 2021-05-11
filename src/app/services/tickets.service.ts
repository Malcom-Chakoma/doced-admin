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
export class TicketsService {
  tickets$ = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.getTicket();
  }
  // addTicket(ticket:any){
  //   let ts = {
  //     email:ticket.email,
  //     subject:ticket.subject,
  //     body:ticket.body,
  //     status:status,
  //     timestamp: + new Date(),
  //   };
  //   this.http.post(environment.api_url + 'ticket', ts).subscribe((tickets)=>{
  //     this.dialog.closeAll();
  //     this.notificationService.successNotification('Ticket Added');
  //     this.getTicket();
  //   },({error})=>{
  //     this.notificationService.errorNotification(error.message);
  //     console.log(error);
  //   })
  // }
  getTicket() {
    this.http.get(environment.api_url + 'ticket').subscribe(
      (tickets) => {
        this.tickets$.next(tickets);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTicket(id, value) {
    this.http.put(environment.api_url + 'ticket/' + id, value).subscribe(
      (tickets) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('Ticket Updated');
        this.getTicket();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
  deleteTicket(id) {
    this.http.delete(environment.api_url + 'ticket' + id).subscribe(
      (tickets) => {
        this.dialog.closeAll();
        this.notificationService.successNotification('Ticket Deleted');
        this.getTicket();
      },
      ({ error }) => {
        this.notificationService.errorNotification(error.message);
        console.log(error);
      }
    );
  }
}
