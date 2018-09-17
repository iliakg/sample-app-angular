import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Admin} from '../../shared/interfaces'
import {AdminsService} from '../../shared/services/admins.service'

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html'
})

export class AdminsListComponent implements OnInit {
  admins$: Observable<Admin[]>

  constructor(private adminsService: AdminsService) {
  }

  ngOnInit() {
    this.admins$ = this.adminsService.fetch()
  }
}
