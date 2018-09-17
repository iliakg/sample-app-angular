import {AfterViewInit, Component} from '@angular/core'
import {Router} from '@angular/router'
import {MaterialService} from '../shared/services/materialize.service'
import {AdminAuthService} from './shared/services/admin-auth.service'

@Component({
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements AfterViewInit {

  constructor(private auth: AdminAuthService, private router: Router) {
  }

  ngAfterViewInit() {
    MaterialService.initSidenav()
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/admin/login'])
  }
}
