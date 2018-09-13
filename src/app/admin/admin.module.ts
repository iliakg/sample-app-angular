import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AdminLayoutComponent} from './admin-layout.component'

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    AdminLayoutComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule {
}

