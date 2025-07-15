import { Routes } from '@angular/router';
import {Register} from './components/register/register';
import { Login } from './components/login/login';
import {VerifyOtp} from './components/verify-otp/verify-otp';
import {Dashboard} from './components/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    // component: Login,
  },
  {
    path:'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'authenticate',
    component: VerifyOtp
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];
