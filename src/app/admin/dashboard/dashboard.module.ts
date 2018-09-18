import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardComponent} from './dashboard.component'
import {AdminSharedModule} from '../shared/admin-shared.module'

const adminRoutes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    AdminSharedModule
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

