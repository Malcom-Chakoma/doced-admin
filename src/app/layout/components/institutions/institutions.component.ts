import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InstitutionsService } from './../../../services/institutions.service';
import { ViewInstitutionsComponent } from './components/view-institutions/view-institutions.component';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit {
  dataSource: MatTableDataSource<unknown>;
  displayedColumns = ['name', 'type', 'head_office', 'locations', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private institutionsService: InstitutionsService
  ) {}

  ngOnInit(): void {
    this.institutionsService.institutions$.subscribe(
      (institutions) => {(this.dataSource = new MatTableDataSource(institutions))
        this.dataSource.paginator = this.paginator;}
    );
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewInstitutions(institution) {
    this.dialog.open(ViewInstitutionsComponent, {
      width: '80%',
      data: institution,
    });
  }
}
