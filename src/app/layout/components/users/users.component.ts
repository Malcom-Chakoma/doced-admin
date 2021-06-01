import { AfterViewInit ,Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from './../../../services/users.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit{
  dataSource;
  displayedColumns = [
    'first_name',
    'last_name',
    'email',
    'user_type',
    'department',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private usersService: UsersService) {
    
  }
  ngOnInit(): void {
    this.usersService.admins$.subscribe(
      (admins) => {(this.dataSource = new MatTableDataSource(admins))
        this.dataSource.paginator = this.paginator;}
    );
    
  }

  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
  }

  addUser() {
    this.dialog.open(AddUserComponent, {
      width: '30%',
    });
  }

  deleteUser(id: string) {
    let res = confirm('Are you sure you want to delete a user');
    if (res) this.usersService.deleteUser(id);
  }
  viewUser(user) {
    this.dialog.open(ViewUserComponent, {
      width: '30%',
      data: user,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
