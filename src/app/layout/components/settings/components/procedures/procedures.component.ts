import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProcedureService } from 'src/app/services/procedure.service';
import { AddProcedureComponent } from './components/add-procedure/add-procedure.component';
import { ViewProcedureComponent } from './components/view-procedure/view-procedure.component';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit, AfterViewInit{
dataSource;
displayedColumns=['name','type','status','actions']

@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog:MatDialog,private procedureServece:ProcedureService) {
   }

  ngOnInit(): void {
    this.procedureServece.procedures$.subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addProcedure(){
  this.dialog.open(AddProcedureComponent,{
    width:"40%"
  })
  }


  viewProcedure(procedure){
    this.dialog.open(ViewProcedureComponent,{
      width:"40%",
      data:procedure
    })
  }
  deleteProcedure(id){
    this.procedureServece.deleteProcedure(id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
