import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForgotPasswordComponent, SignInComponent, LogInComponent],
  imports: [CommonModule, LoginRoutingModule, RouterModule, FormsModule],
})
export class LoginModule {}
