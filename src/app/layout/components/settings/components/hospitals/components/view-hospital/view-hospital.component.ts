import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.scss']
})
export class ViewHospitalComponent implements OnInit {

  form:FormGroup
  cities =[] //(countries as any).default;
  filtered_cities = this.cities;
  constructor(private fb:FormBuilder, private http:HttpClient, private hospitalService:HospitalService,@Inject(MAT_DIALOG_DATA) public data:Hospital) {
    this.getCities()
   }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      name:[this.data.name,[Validators.required]],
      city:[this.data.city,Validators.required],
      country:[this.data.country]
    })
    this.form.disable()
  }
  filterOptions(value:string){
     if(value){
       this.filtered_cities = this.cities.filter((city:any)=>{
        return city.name.toLocaleLowerCase().match(value.toLocaleLowerCase())
     
       })
     }
     else{
       this.filtered_cities = this.cities
     }
   
   }

    getCities(){
     this.http.get("./../../../../../../../../assets/datasets/zimbabwe.json").subscribe((cities:any)=>{
      this.cities =cities
      this.filtered_cities = cities
     })
   }

   addCounty(value:any){
    let city:any = this.cities.filter((c)=>{ return c.name === value})[0]
    this.form.get('country').setValue(city.country)
   }

   onSubmit(){
     this.hospitalService.updateHospital(this.data._id,this.form.value)
   }

}
