import { Component, OnInit } from '@angular/core';
import { HOME, LOGIN, REGISTER } from '../../../constants/routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login = LOGIN.url;
  signUp = REGISTER.url;
  home = HOME.url;
  constructor() { }

  ngOnInit(): void {
  }

}
