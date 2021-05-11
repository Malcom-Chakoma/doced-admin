import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstitutionsService } from 'src/app/services/institutions.service';
import{Institution} from './../../../../../models/institution.model'

@Component({
  selector: 'app-view-institutions',
  templateUrl: './view-institutions.component.html',
  styleUrls: ['./view-institutions.component.scss']
})
export class ViewInstitutionsComponent implements OnInit {
  institutions 
  constructor(private dialog:MatDialog,private institutionService:InstitutionsService,@Inject (MAT_DIALOG_DATA) public data:any) {
  console.log(data)
   }

  ngOnInit(): void {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}


