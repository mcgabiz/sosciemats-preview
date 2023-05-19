import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfiguration } from './core/configuration/routes.configuration';
import { LandingDefaultComponent } from './components/pages/landing-default/landing-default.component';
import { LandingMainComponent } from './components/pages/landing-main/landing-main.component';
import { LandingInfoComponent } from './components/pages/landing-info/landing-info.component';
import { LandingLoginComponent } from './components/pages/landing-login/landing-login.component';
import { UserDefaultComponent } from './components/pages/user-default/user-default.component';
import { UserMainComponent } from './components/pages/user-main/user-main.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';

const route = RoutesConfiguration

const routes: Routes = [
  {
    path: '', component: LandingDefaultComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: route.landing.main.link },
      { path: route.landing.main.link, component: LandingMainComponent },
      { path: route.landing.info.link, component: LandingInfoComponent },
      { path: route.landing.login.link, component: LandingLoginComponent }
    ]
  },
      {
    path: route.user.default.link, component: UserDefaultComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: route.user.main.link },
      { path: route.user.main.link, component: UserMainComponent },
      { path: route.user.profile.link, component: UserProfileComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
