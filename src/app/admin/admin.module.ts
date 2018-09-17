import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {AdminSharedModule} from './shared/admin-shared.module'
import {AdminLayoutComponent} from './admin-layout.component';
import {AdminAuthGuard} from './shared/guards/admin-auth.guard'

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, canActivate: [AdminAuthGuard], children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AdminAuthGuard]},
      {path: 'admins', loadChildren: './admins/admins.module#AdminsModule', canLoad: [AdminAuthGuard]}
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
  providers: []
})

export class AdminModule {
}

