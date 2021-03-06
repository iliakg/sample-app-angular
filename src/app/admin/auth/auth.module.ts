import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {AdminSharedModule} from '../shared/admin-shared.module'

import {AdminAuthLayoutComponent} from './admin-auth-layout/admin-auth-layout.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'

const authRoutes: Routes = [
  {
    path: '', component: AdminAuthLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'sign_up', component: RegisterComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    AdminSharedModule
  ],
  declarations: [
    AdminAuthLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
