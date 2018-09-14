import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AdminAuthService} from '../../shared/services/admin-auth.service'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {Subscription} from 'rxjs'
import {MaterialService} from '../../../shared/services/materialize.service'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  authSub: Subscription

  constructor(
    private auth: AdminAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        MaterialService.toast('Теперь вы можете зайти в систему')
      } else if (params['accessDenied']) {
        MaterialService.toast('Авторизуйтесь в системе')
      } else if (params['sessionFailed']) {
        MaterialService.toast('Пожалуйста заново войдите в систему')
      }
    })
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()

    this.authSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/admin/dashboard']),
      error => {
        MaterialService.toast(error.error.message, 'error')
        console.log(error.error.message)
        this.form.enable()
      }
    )
  }
}
