import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Admin} from '../interfaces'

@Injectable({
  providedIn: 'root'
})

export class AdminsService {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Admin[]> {
    return this.http.get<Admin[]>('/api/admins')
  }

  getById(id: string): Observable<Admin> {
    return this.http.get<Admin>(`/api/admins/${id}`)
  }

  create(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>('/api/admins', admin)
  }

  update(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`/api/admins/${admin._id}`, admin)
  }

  delete(admin: Admin): Observable<any> {
    return this.http.delete<any>(`/api/admins/${admin._id}`)
  }
}
