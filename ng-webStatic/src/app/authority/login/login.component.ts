import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // 静态资源可以通过angular.json里配置的assets来轻松访问
  bgUrl = 'assets/images/login-bg.png'
  day = _moment().format('DD');
  month = _moment().format('MMM');
  constructor() { }

  ngOnInit() {
  }

}
