import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html'
})

export class AdminHeaderComponent implements OnInit {
  @Input() title: string
  @Input() link: { text: string, path: string}

  constructor() {
  }

  ngOnInit() {
  }
}
