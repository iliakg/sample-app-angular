import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Subscription} from 'rxjs'
import {Router} from '@angular/router'
import {AdminAuthService} from '../../shared/services/admin-auth.service'
import {MaterialService} from '../../../shared/services/materialize.service'

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup
  authSub: Subscription

  constructor(private auth: AdminAuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()
    this.authSub = this.auth.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/admin/login'], {
          queryParams: {
            registered: true
          }
        })
      },
      error => {
        MaterialService.toast(error.error.message, 'error')
        this.form.enable()
      }
    )
  }
}
