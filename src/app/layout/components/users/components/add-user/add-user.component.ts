import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UsersService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      middle_initial: [''],
      gender:['',[Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      user_type: ['', [Validators.required]],
      department: ['', [Validators.required]],
      password: ['africanunicorn@86', [Validators.required]],
    });
  }
  onSubmit() {
    this.userService.addUser(this.form.value);
  }
}
