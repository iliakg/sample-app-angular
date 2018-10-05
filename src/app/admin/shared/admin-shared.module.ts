import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {FormErrorsComponent} from './components/form-errors/form-errors.component'
import {LoaderComponent} from '../../shared/components/loader/loader.component'
import {AdminHeaderComponent} from './components/admin-header/admin-header.component'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    FormErrorsComponent,
    LoaderComponent,
    AdminHeaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormErrorsComponent,
    LoaderComponent,
    AdminHeaderComponent
  ]
})

export class AdminSharedModule {}
