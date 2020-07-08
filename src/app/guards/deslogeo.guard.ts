import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DeslogeoGuard implements CanActivate {

  constructor(private router: Router, public jwtHelper: JwtHelperService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      try {
        const token = localStorage.getItem('token');

        if(token == null)
        {
          return true;
        }
        else{
          this.router.navigateByUrl("/");
          return false;
        }
     

      } catch (error) {
        this.router.navigateByUrl("login");
        return false;
      }
  }
  
}
