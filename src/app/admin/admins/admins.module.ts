import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AdminSharedModule} from '../shared/admin-shared.module'
import {AdminListComponent} from './admin-list/admin-list.component'
import {AdminFormComponent} from './admin-form/admin-form.component'


const adminRoutes: Routes = [
  {path: '', component: AdminListComponent},
  {path: ':id/edit', component: AdminFormComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    AdminSharedModule
  ],
  declarations: [
    AdminListComponent,
    AdminFormComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AdminsModule {
}

