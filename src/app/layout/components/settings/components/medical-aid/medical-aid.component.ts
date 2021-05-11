import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalAid } from 'src/app/models/medical-aid.model';
import { MedicalAidService } from 'src/app/services/medical-aid.service';
import { AddMedicalAidComponent } from './components/add-medical-aid/add-medical-aid.component';
import { ViewMedicalAidComponent } from './components/view-medical-aid/view-medical-aid.component';

@Component({
  selector: 'app-medical-aid',
  templateUrl: './medical-aid.component.html',
  styleUrls: ['./medical-aid.component.scss'],
})
export class MedicalAidComponent implements OnInit {
  dataSource: MatTableDataSource<unknown>;
  displayedColumns = ['name', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private medicalAidService: MedicalAidService
  ) {
   
  }

  ngOnInit(): void {
    this.medicalAidService.medical_aids$.subscribe(
      (medical_aids) => {(this.dataSource = new MatTableDataSource(medical_aids))
        this.dataSource.paginator = this.paginator;
      }
);
    
  }

  addMedicalAid() {
    this.dialog.open(AddMedicalAidComponent, {
      width: '30%',
    });
  }

  viewMedicalAid(value: any) {
    this.dialog.open(ViewMedicalAidComponent, { width: '30%', data: value });
  }
  deleteMedicalAid(id) {
    this.medicalAidService.deleteMedicalAid(id);
  }
  activateDeactivate(value: MedicalAid) {
    let status = 'active';
    if (value.status === 'active') status = 'inactive';
    this.medicalAidService.updateMedicalAid(value._id, { status: status });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
