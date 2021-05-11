import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DeAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean 
  {
    if (this.authService.SessionUser) {
      this.router.navigateByUrl('/layout');
      return false;
    }

    return true;
  }
}
