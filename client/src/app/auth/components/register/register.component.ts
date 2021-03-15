import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/constants/routes.constants';
import { mustMatch } from 'src/app/shared/helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  signUpForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.signUpForm = new FormGroup(
      {
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            new RegExp(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
            )
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: mustMatch }
    );
  }

  submitData() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      this.router.navigate([PRODUCTS.url]);
    }
  }
}
