import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LOGIN, REGISTER } from '../constants/routes.constants';

const routes: Routes = [
  {
    path: LOGIN.name,
    component: LoginComponent
  },
  {
    path: REGISTER.name,
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
