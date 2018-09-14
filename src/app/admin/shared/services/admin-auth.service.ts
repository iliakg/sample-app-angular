import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Admin} from '../interfaces'
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AdminAuthService {

  private token = null

  constructor(private http: HttpClient) {
  }

  register(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>('/api/auth/register', admin)
  }

  login(admin: Admin): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', admin)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }
}
