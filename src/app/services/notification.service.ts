import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar:MatSnackBar) { }
  successNotification(message:string){
    this.snackBar.open(message,"dismiss",{
      duration:5000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:'success-snack'
    })
  }
  errorNotification(message:string){
    this.snackBar.open(message,"dismiss",{
      duration:5000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:'error-snack'
    })
  }
}
