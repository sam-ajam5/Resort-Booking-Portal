import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const requiredRoles = route.data['roles'] as string[]; // Expected roles from the route configuration
 
    if (!this.authService.isLoggedIn()) {
      // Not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
 
    const role = this.authService.getUserRole();
    if (requiredRoles && !requiredRoles.includes(role)) {
      // Role not authorized so redirect to unauthorized page
      this.router.navigate(['/error']);
      return false;
    }
 
    return true;
  }
}
