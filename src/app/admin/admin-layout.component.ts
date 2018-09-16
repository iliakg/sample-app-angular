import {AfterViewInit, Component, OnInit} from '@angular/core'
import {MaterialService} from '../shared/services/materialize.service'

@Component({
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initSidenav()
  }
}
