import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from './../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form:FormGroup
  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){
    this.authService.signIn(this.form.value)
    
  }

}
