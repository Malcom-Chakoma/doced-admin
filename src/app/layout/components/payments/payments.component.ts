import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { ViewPaymentComponent } from './components/view-payment/view-payment.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit , AfterViewInit{
dataSource:MatTableDataSource<unknown>;
displayedColumns  = ['duration','amount','plan','institution','actions'];
  
@ViewChild(MatPaginator) paginator: MatPaginator;


constructor(private dialog:MatDialog,private subscriptionsService:SubscriptionsService) { }

 
  ngOnInit(): void {
    this.subscriptionsService.subscription$.subscribe(
      (subscription) => {(this.dataSource = new MatTableDataSource(subscription))
        this.dataSource.paginator = this.paginator;
      }
);
  }

  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
  }

  addSubscription(){
  this.dialog.open(AddPaymentComponent,{
    width:"40%"
  })
  }


  viewSubscription(subscription){
    this.dialog.open(ViewPaymentComponent,{
      width:"40%",
      data:subscription
    })
  }
  deleteSubscription(id){
    this.subscriptionsService.deleteSubscription(id)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
