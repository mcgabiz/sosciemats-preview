import { Component } from '@angular/core';
import { RoutesConfiguration } from 'src/app/core/configuration/routes.configuration';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent {
  route = RoutesConfiguration
}
