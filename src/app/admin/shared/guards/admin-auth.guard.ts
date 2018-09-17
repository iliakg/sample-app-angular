import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router'
import {Observable, of} from 'rxjs'
import {Injectable} from '@angular/core'
import {AdminAuthService} from '../services/admin-auth.service'

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AdminAuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkPermissions()
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkPermissions()
  }

  canLoad(route: Route): Observable<boolean> {
    return this.checkPermissions()
  }

  private checkPermissions() {
    if (this.auth.isAuthenticated()) {
      return of(true)
    } else {
      this.router.navigate(['/admin/login'], {
        queryParams: {
          accessDenied: true
        }
      })
      return of(false)
    }
  }
}
