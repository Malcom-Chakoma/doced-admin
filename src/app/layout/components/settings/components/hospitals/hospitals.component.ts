import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HospitalService } from 'src/app/services/hospital.service';
import { ViewUserComponent } from '../../../users/components/view-user/view-user.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { ViewHospitalComponent } from './components/view-hospital/view-hospital.component';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  displayedColumns = ['name', 'city', 'country', 'actions'];
  dataSource: MatTableDataSource<unknown>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private hospitalService: HospitalService
  ) {}

  ngOnInit(): void {
    this.hospitalService.hospitals$.subscribe((hospitals) => {
      this.dataSource = new MatTableDataSource(hospitals);
      this.dataSource.paginator = this.paginator;
    });
  }

  addHospital() {
    this.dialog.open(AddHospitalComponent, {
      width: '40%',
    });
  }

  viewHospital(value: any) {
    this.dialog.open(ViewHospitalComponent, {
      width: '40%',
      data: value,
    });
  }

  deleteHospital(id: string) {
    this.hospitalService.deleteHospital(id);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
