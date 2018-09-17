import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AdminsListComponent} from './admins-list/admins-list.component'
import {AdminSharedModule} from '../shared/admin-shared.module'


const adminRoutes: Routes = [
  {path: '', component: AdminsListComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    AdminSharedModule
  ],
  declarations: [
    AdminsListComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AdminsModule {
}

