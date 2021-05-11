import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { Hospital } from './../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  hospitals$ = new BehaviorSubject(null)
  constructor(private http:HttpClient, private notificationService:NotificationService,private dialog:MatDialog, private authService:AuthService) { this.getHospitals() }
  async addHospital(value:Hospital){
    const {_id,first_name,last_name} = this.authService.SessionUser

    
    value.timestamp = +new Date() 
    value.admin_id = _id;
    value.saved_by=first_name +' '+ last_name;


    this.http.post(environment.api_url+'hospitals',value).subscribe(()=>{
      this.getHospitals()
      this.dialog.closeAll()
      this.notificationService.successNotification('hospital added')

    },({error})=>{
      this.notificationService.errorNotification(error.message)
    })

  }
  getHospitals(){
    this.http.get(environment.api_url+'hospitals').subscribe((hospitals)=>{this.hospitals$.next(hospitals)})
  }
  updateHospital(id:string, value:any){
    this.http.put(environment.api_url+'hospitals/'+id,value).subscribe(()=>{
      this.getHospitals()
      this.dialog.closeAll()
      this.notificationService.successNotification('hospital updated')

    },({error})=>{
      this.notificationService.errorNotification(error.message)
    })
  }
  deleteHospital(id:string){
    this.http.delete(environment.api_url+'hospitals/'+id).subscribe(()=>{
      this.getHospitals()
      this.notificationService.successNotification('hospital deleted')

    },({error})=>{
      this.notificationService.errorNotification(error.message)
    })
  }
}
