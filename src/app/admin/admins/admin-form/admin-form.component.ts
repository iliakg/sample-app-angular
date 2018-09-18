import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params} from '@angular/router'
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {AdminsService} from '../../shared/services/admins.service'
import {Admin} from '../../shared/interfaces'
import {MaterialService} from '../../../shared/services/materialize.service'

@Component({
  templateUrl: './admin-form.component.html'
})

export class AdminFormComponent implements OnInit {
  form: FormGroup
  isNew = true
  admin: Admin

  constructor(private adminsService: AdminsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null, Validators.required)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.adminsService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (admin: Admin) => {
          if (admin) {
            this.admin = admin
            this.form.patchValue({
              name: admin.name,
              email: admin.email
            })

            MaterialService.updateTextInputs()
          }

          this.form.enable()
        },
        error => MaterialService.toast(error.error.message, 'error')
      )
  }

  onSubmit() {
    let obs$
    this.form.disable()

    const newAdmin: Admin = {
      name: this.form.value.name,
      email: this.form.value.email
    }

    if (this.isNew) {
      obs$ = this.adminsService.create(newAdmin)
    } else {
      newAdmin._id = this.admin._id
      obs$ = this.adminsService.update(newAdmin)
    }

    obs$.subscribe(
      admin => {
        this.admin = admin
        MaterialService.toast('Изменения сохранены.')
        this.form.enable()
      },
      error => {
        MaterialService.toast(error.error.message, 'error')
        this.form.enable()
      }
    )
  }
}
