import { DataSource } from '@angular/cdk/collections';
import { Component, AfterViewInit , OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorsService } from 'src/app/services/doctors.service';
import { InstitutionsService } from './../../../services/institutions.service';
import { ViewInstitutionsComponent } from './components/view-institutions/view-institutions.component';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit ,AfterViewInit {
  dataSource: MatTableDataSource<unknown>;
  displayedColumns = ['name', 'type', 'head_office', 'locations', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private institutionsService: InstitutionsService,
    private doctorsService: DoctorsService
  ) {
    
  }

  ngOnInit(): void {
    this.institutionsService.institutions$.subscribe(
      (institutions) => {(this.dataSource = new MatTableDataSource(institutions))
        console.log(institutions)
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  }
}

  viewInstitutions(institution) {
    this.dialog.open(ViewInstitutionsComponent, {
      width: '70%',
      data: institution,
    });
  }
}
