import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubscriptionPlanService } from 'src/app/services/subscription-plan.service';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { ViewSubscriptionComponent } from './components/view-subscription/view-subscription.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
  dataSource;
  displayedColumns = ['name', 'for', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private plan: SubscriptionPlanService
  ) {
   
  }

  ngOnInit(): void {
    this.plan.subscription_plans$.subscribe((plans) => {
      this.dataSource = new MatTableDataSource(plans);
      this.dataSource.paginator = this.paginator;
    });
  }

  addSubscription() {
    this.dialog.open(AddSubscriptionComponent, {
      width: '80%',
      height: '90%',
    });
  }

  viewPlan(plan) {
    this.dialog.open(ViewSubscriptionComponent, {
      width: '80%',
      height: '90%',
      data: plan,
    });
  }
  deletePlan(id) {
    this.plan.deletePlan(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
