import {Component, OnInit} from '@angular/core'
import {Admin} from '../../shared/interfaces'
import {AdminsService} from '../../shared/services/admins.service'
import {MaterialService} from '../../../shared/services/materialize.service'

@Component({
  templateUrl: './admin-list.component.html'
})

export class AdminListComponent implements OnInit {
  admins: Admin[] = []
  loading = false

  constructor(private adminsService: AdminsService) {
  }

  ngOnInit() {
    this.loading = true
    this.adminsService.fetch().subscribe(admins => {
      this.admins = admins
      this.loading = false
    })
  }

  removeAdmin(admin: Admin) {
    const decision = window.confirm(`Удалить админа "${admin.email}"?`)

    if (decision) {
      this.adminsService.delete(admin).subscribe(
        response => {
          const idx = this.admins.findIndex(p => p._id === admin._id)
          this.admins.splice(idx, 1)
          MaterialService.toast(response.message)
        },
        error => MaterialService.toast(error.error.message, 'error')
      )
    }
  }
}
