import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DataclerkService } from 'src/app/services/dataclerk.service';
import { InstitutionsService } from 'src/app/services/institutions.service';
import { AddDataclerksComponent } from './components/add-dataclerks/add-dataclerks.component';
import { ChangeInstitutionComponent } from './components/change-institution/change-institution.component';
import { ViewDataclerksComponent } from './components/view-dataclerks/view-dataclerks.component';

@Component({
  selector: 'app-dataclerks',
  templateUrl: './dataclerks.component.html',
  styleUrls: ['./dataclerks.component.scss']
})
export class DataclerksComponent implements OnInit {
  dataSource: MatTableDataSource<unknown>;
  displayedColumns = ['first_name','email','institution','action']
  constructor(private dialog:MatDialog,private dataClerkService:DataclerkService,private institutionsService:InstitutionsService) { 

    this.dataClerkService.dataclerk$.subscribe(
      (dataclerk) => {(this.dataSource = new MatTableDataSource(dataclerk))})
     
  }

  ngOnInit(): void {
    this.dataClerkService.dataclerk$.subscribe(
      (dataclerk) => {(this.dataSource = new MatTableDataSource(dataclerk))}
    )}

addDataClerk(){
  this.dialog.open(AddDataclerksComponent,{
    width:'40%'
  })
}

// viewDataClerk(dataClerk:any){
//   this.dialog.open(ViewDataclerksComponent,{
//     width:"40%", data:dataClerk
//   })
// }

changeInstitution(value:any){
  this.dialog.open(ChangeInstitutionComponent,{
    width:"30%", data:value
  })
}

}
