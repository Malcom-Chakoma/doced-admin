import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';
// import * as countries from "./../../../../../../../../assets/datasets/zimbabwe.json"

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {
  form:FormGroup
  cities =[] //(countries as any).default;
  filtered_cities = this.cities;
  constructor(private fb:FormBuilder, private http:HttpClient, private hospitalService:HospitalService) {
    this.getCities()
   }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      name:['',[Validators.required]],
      city:['',Validators.required],
      country:['']
    })
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
     this.hospitalService.addHospital(this.form.value)
   }

}
