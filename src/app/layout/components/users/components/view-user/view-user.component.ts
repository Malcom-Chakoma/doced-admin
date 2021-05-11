import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Admin } from 'src/app/models/admin.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UsersService,@Inject(MAT_DIALOG_DATA) public data:Admin) {
  }

  ngOnInit(): void {
    console.log(this.data)

    this.form = this.fb.group({
      first_name: [this.data.first_name, [Validators.required]],
      last_name: [this.data.last_name, [Validators.required]],
      middle_initial: [this.data.middle_initial],
      gender:[this.data.gender,[Validators.required]],
      user_type: [this.data.user_type, [Validators.required]],
      department: [this.data.department, [Validators.required]],
    });
    this.form.disable()
 


  
  }
  onSubmit() {
    this.userService.updateAdmin(this.data._id,this.form.value);
  }
}
