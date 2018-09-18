import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
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
    AdminHeaderComponent,
    LoaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminHeaderComponent,
    LoaderComponent
  ]
})

export class AdminSharedModule {}
