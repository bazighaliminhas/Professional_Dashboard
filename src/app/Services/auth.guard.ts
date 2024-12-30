import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage?.getItem('userToken');
    if (token) {
      return true; // User is authenticated
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false; // User is not authenticated, redirect to login
    }
  }
  
}