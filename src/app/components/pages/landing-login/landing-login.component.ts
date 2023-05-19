import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { RoutesConfiguration } from 'src/app/core/configuration/routes.configuration';

@Component({
  selector: 'app-landing-login',
  templateUrl: './landing-login.component.html',
  styleUrls: ['./landing-login.component.scss']
})

export class LandingLoginComponent {

  login = ""
  password = ""
  message = ""

  route = RoutesConfiguration
  constructor(private router: Router) { }
  RedirectAfretLogin() {
    if (this.login == "admin" && this.password == "admin") {
      this.router.navigate([this.route.user.default.link])
    } else {
      this.login = ""
      this.password = ""
      this.message = "Lietotājs netika atpazīts! Mēģiniet vēlreiz!"
    }
  }

}
