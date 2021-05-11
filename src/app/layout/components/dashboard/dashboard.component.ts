import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsService } from 'src/app/services/doctors.service';
import { InstitutionsService } from 'src/app/services/institutions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  doctors = []
  institutions = []
  constructor(
    private dialog: MatDialog,
    private doctorsService: DoctorsService,
    private institutionsService: InstitutionsService
  ) {
    doctorsService.users$.subscribe((doctors)=>{
      this.doctors = doctors;
    
    institutionsService.institutions$.subscribe((institutions)=>{
      this.institutions = institutions
    })
    })

  }

  ngOnInit(): void {}
}
