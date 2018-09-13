import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardComponent} from './dashboard.component'

const adminRoutes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule {
}

