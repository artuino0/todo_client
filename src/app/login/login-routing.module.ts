import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'log-in', pathMatch: 'full' },
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignInComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
