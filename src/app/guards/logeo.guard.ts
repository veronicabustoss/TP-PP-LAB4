import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LogeoGuard implements CanActivate {

  constructor(private router: Router, public jwtHelper: JwtHelperService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      try {
        const token = localStorage.getItem('token');

        const payload = this.jwtHelper.decodeToken(token);

        if(payload != null)
        {
          return true;
        }
        else{
          this.router.navigate(['login']);
          return false;
        }
     

      } catch (error) {
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
