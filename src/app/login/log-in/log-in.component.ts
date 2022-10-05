import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  user: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private _login: LoginService, private _router: Router) {}

  ngOnInit(): void {}

  getUserLogin() {
    this._login
      .authService(this.user, this.password)
      .then((rs) => {
        console.log(rs.data);
        this.loginError = false;
      })
      .catch((err) => {
        this.loginError = true;
      });
  }

  toSignUp() {
    this._router.navigate(['/start/sign-up']);
  }
}
