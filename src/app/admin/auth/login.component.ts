import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  // aSub: Subscription

  // constructor(private auth: AuthService,
  //             private router: Router,
  //             private route: ActivatedRoute) {
  // }

  constructor() {
  }


  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnDestroy() {
    // if (this.aSub) {
    //   this.aSub.unsubscribe()
    // }
  }

  onSubmit() {
    // this.form.disable()
    //
    // this.aSub = this.auth.login(this.form.value).subscribe(
    //   () => this.router.navigate(['/overview']),
    //   error => {
    //     MaterialService.toast(error.error.message)
    //     this.form.enable()
    //   }
    // )
  }
}
