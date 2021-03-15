import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ERROR_MESSAGES } from 'src/app/constants/constants';
import { PRODUCTS } from 'src/app/constants/routes.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorsMessages = ERROR_MESSAGES;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitData() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.loginForm.value));
      this.router.navigate([PRODUCTS.url]);
    }
  }
}
