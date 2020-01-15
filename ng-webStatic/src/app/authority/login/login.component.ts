import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as _moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  // 静态资源可以通过angular.json里配置的assets来轻松访问
  bgUrl = 'assets/images/login-bg.png'
  day = _moment().format('DD');
  month = _moment().format('MMM');
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initValidateForm();
  }

  initValidateForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('username');
  }

}
