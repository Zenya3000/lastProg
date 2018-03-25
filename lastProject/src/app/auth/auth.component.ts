import { Component, OnInit } from '@angular/core';
import { AuthService } from '../-service/auth.service';
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
