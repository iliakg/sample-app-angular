import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {AdminAuthLayoutComponent} from './admin-auth-layout.component'
import {LoginComponent} from './login.component'
import {RegisterComponent} from './register.component'


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
    RouterModule.forChild(authRoutes)
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
