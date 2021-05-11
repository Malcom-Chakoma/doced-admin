import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  user

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  time: string;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
    this.user = authService.SessionUser
    setInterval(() => {
      this.time = new Date().toTimeString().substr(0, 8)
    }, 1000)
  }

  signOut() {
    this.authService.signOut()
  }


}
