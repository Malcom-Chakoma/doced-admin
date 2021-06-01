import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SpecialisationService } from 'src/app/services/specialisation.service';
import { AddSpecialisationsComponent } from './components/add-specialisations/add-specialisations.component';
import { ViewSpecialisationsComponent } from './components/view-specialisations/view-specialisations.component';

@Component({
  selector: 'app-specialisations',
  templateUrl: './specialisations.component.html',
  styleUrls: ['./specialisations.component.scss'],
})
export class SpecialisationsComponent implements OnInit , AfterViewInit{
  displayedColumns = ['name', 'procedures', 'actions'];
  dataSource: MatTableDataSource<unknown>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private specialisationService: SpecialisationService,
    private dialog: MatDialog
  ) {
    
  }

  ngOnInit(): void {
    this.specialisationService.specialisations$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addSpecialisation() {
    this.dialog.open(AddSpecialisationsComponent, {
      width: '40%',
    });
  }

  viewSpecialisation(specialisation) {
    this.dialog.open(ViewSpecialisationsComponent, {
      width: '40%',
      data: specialisation,
    });
  }

  deleteSpecialisation(id) {
    this.specialisationService.deleteSpecialisation(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
