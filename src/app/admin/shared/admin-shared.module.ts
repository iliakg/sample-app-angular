import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {LoaderComponent} from '../../shared/components/loader/loader.component'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoaderComponent
  ]
})

export class AdminSharedModule {}
