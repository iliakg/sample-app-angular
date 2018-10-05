import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {AdminsService} from '../../shared/services/admins.service'
import {Admin, Error} from '../../shared/interfaces'
import {MaterialService} from '../../../shared/services/materialize.service'

@Component({
  templateUrl: './admin-form.component.html'
})

export class AdminFormComponent implements OnInit {
  form: FormGroup
  errors: Error[]
  isNew = true
  admin: Admin

  constructor(
    private adminsService: AdminsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.minLength(6), Validators.maxLength(50)])
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.adminsService.getById(params['id'])
            } else {
              this.form.controls['password'].setValidators(
                [Validators.required, Validators.minLength(6), Validators.maxLength(50)]
              )
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
    this.form.disable()

    const newAdmin: Admin = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    if (this.isNew) {
      this.adminsService.create(newAdmin).subscribe(
        admin => {
          MaterialService.toast(`Добавлен новый админ ${admin.email}`)
          this.router.navigate(['/admin/admins'])
        },
        error => {
          this.errors = error.error
          this.form.enable()
        }
      )
    } else {
      newAdmin._id = this.admin._id
      this.adminsService.update(newAdmin).subscribe(
        () => {
          MaterialService.toast('Изменения сохранены.')
          this.form.controls['password'].reset()
          this.errors = null
          this.form.enable()
        },
        error => {
          this.errors = error.error
          this.form.enable()
        }
      )
    }
  }
}
