import {Component, Input} from '@angular/core'
import {Error} from '../../interfaces'

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html'
})

export class FormErrorsComponent {
  @Input() errors: Error[]
}
