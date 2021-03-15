import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/app/constants/constants';

@Component({
  selector: 'app-form-error',
  template: `<div class="form__error" *ngIf="showError">{{ error }}</div>`,
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent {
  @Input() submitted = false;
  @Input() showError = false;
  error = '';
  get errors(): any {
    return this.error;
  }
  @Input() set errors(val: any) {
    this.error = ERROR_MESSAGES[Object.keys(val || {})[0]] || '';
  }

  constructor() {}
}
