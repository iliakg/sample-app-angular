import {AfterViewInit, Component, OnInit} from '@angular/core'

declare var M

@Component({
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }
}
