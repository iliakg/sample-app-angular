import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {AdminSharedModule} from './shared/admin-shared.module'
import {AdminTokenInterceptor} from './shared/services/admin-token.interceptor'
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
    RouterModule.forChild(adminRoutes),
    AdminSharedModule
  ],
  declarations: [
    AdminLayoutComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AdminTokenInterceptor}
  ]
})

export class AdminModule {
}

