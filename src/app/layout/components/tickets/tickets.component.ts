import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TicketsService } from './../../../services/tickets.service';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<unknown>;
  displayedColumns = ['email', 'subject', 'body', 'actions'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
    private ticketsService: TicketsService
  ) {}

  ngOnInit(): void {
    
    this.ticketsService.tickets$.subscribe((tickets) => {
      console.log(tickets);
      this.dataSource = new MatTableDataSource(tickets)
      this.dataSource.paginator = this.paginator;

    });
  }

  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
  }
  // addTicket(){
  //   this.dialog.open(AddTicketComponent,{
  //     width:'30%'
  //   })
  // }

  viewTicket(value: any) {
    this.dialog.open(ViewTicketComponent, {
      width: '25%',
      data: value,
    });
  }

  deleteTicket(id) {
    this.ticketsService.deleteTicket(id);
  }

  activateDeactivate(value: any) {
    let status = 'active';
    if (value.status === 'active') status = 'inactive';
    this.ticketsService.updateTicket(value._id, { status: status });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
