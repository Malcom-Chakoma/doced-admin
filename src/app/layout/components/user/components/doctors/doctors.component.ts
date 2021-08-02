import { AfterViewInit , Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<unknown>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['title', 'first_name', 'last_name', 'email','actions'];
  constructor(
    private dialog: MatDialog,
    private doctorsService: DoctorsService
  ) {
    this.doctorsService.users$.subscribe(
      (users) => {(this.dataSource = new MatTableDataSource(users))
        console.log(users)
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewDoctors(user: any) {
    this.dialog.open(ViewDoctorsComponent, {
      width: '80%',
      height: '80%',
      data: user,
    });
  }
}
