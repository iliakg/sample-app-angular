import {Injectable} from '@angular/core'
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {Router} from '@angular/router'
import {AdminAuthService} from './admin-auth.service'

@Injectable()
export class AdminTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AdminAuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      })
    }
    return next.handle(req).pipe(
      catchError(
        (error: HttpErrorResponse) => this.handleAuthError(error)
      )
    )
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401) {
      this.auth.logout() // if token expired
      this.router.navigate(['/admin/login'], {
        queryParams: {
          sessionFailed: true
        }
      })
    }

    return throwError(error)
  }
}
