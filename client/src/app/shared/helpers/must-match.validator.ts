import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const mustMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const cPassword = control.get('confirmPassword');
  if(password && cPassword && password.value !== cPassword.value) {
    cPassword.setErrors({ mustMatch: true });
    return { mustMatch: true };
  }
  return null;
};
