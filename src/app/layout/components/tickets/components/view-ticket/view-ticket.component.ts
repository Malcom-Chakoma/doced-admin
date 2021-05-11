import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
form:FormGroup  
tickets

  constructor(private fb:FormBuilder,private ticketsService:TicketsService,@Inject(MAT_DIALOG_DATA) public data:any) { 
    this.tickets = data.tickets
  }

  ngOnInit(): void {
  }

}
