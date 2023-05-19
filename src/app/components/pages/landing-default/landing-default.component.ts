import { Component } from '@angular/core';
import { RoutesConfiguration } from 'src/app/core/configuration/routes.configuration';

@Component({
  selector: 'app-landing-default',
  templateUrl: './landing-default.component.html',
  styleUrls: ['./landing-default.component.scss']
})


export class LandingDefaultComponent {
  
route = RoutesConfiguration

bannerImage = "/assets/media/images/front-baner.jpg"

}
