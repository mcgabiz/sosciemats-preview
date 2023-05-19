import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//
import { MaterialModule } from './core/modules/material/material.module';
//
import { LandingMainComponent } from './components/pages/landing-main/landing-main.component';
import { LandingInfoComponent } from './components/pages/landing-info/landing-info.component';
import { LandingLoginComponent } from './components/pages/landing-login/landing-login.component';
import { UserMainComponent } from './components/pages/user-main/user-main.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { HomeMainComponent } from './components/pages/home-main/home-main.component';
import { HomeStudentsComponent } from './components/pages/home-students/home-students.component';
import { StudentMainComponent } from './components/pages/student-main/student-main.component';
import { StudentMoodComponent } from './components/pages/student-mood/student-mood.component';
import { StudentCalendarComponent } from './components/pages/student-calendar/student-calendar.component';
import { AdministrationMainComponent } from './components/pages/administration-main/administration-main.component';
import { AdministrationUsersComponent } from './components/pages/administration-users/administration-users.component';
import { AdministrationHomesComponent } from './components/pages/administration-homes/administration-homes.component';
import { AdministrationStudentsComponent } from './components/pages/administration-students/administration-students.component';
import { AdministrationEventsComponent } from './components/pages/administration-events/administration-events.component';
import { AdministrationDefaultComponent } from './components/pages/administration-default/administration-default.component';
import { StudentDefaultComponent } from './components/pages/student-default/student-default.component';
import { HomeDefaultComponent } from './components/pages/home-default/home-default.component';
import { UserDefaultComponent } from './components/pages/user-default/user-default.component';
import { LandingDefaultComponent } from './components/pages/landing-default/landing-default.component';
import { StudentHealthComponent } from './components/pages/student-health/student-health.component';
import { LandingHeaderComponent } from './components/headers/landing-header/landing-header.component';
import { LandingFooterComponent } from './components/footers/landing-footer/landing-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingMainComponent,
    LandingInfoComponent,
    LandingLoginComponent,
    UserMainComponent,
    UserProfileComponent,
    HomeMainComponent,
    HomeStudentsComponent,
    StudentMainComponent,
    StudentMoodComponent,
    StudentCalendarComponent,
    AdministrationMainComponent,
    AdministrationUsersComponent,
    AdministrationHomesComponent,
    AdministrationStudentsComponent,
    AdministrationEventsComponent,
    AdministrationDefaultComponent,
    StudentDefaultComponent,
    HomeDefaultComponent,
    UserDefaultComponent,
    LandingDefaultComponent,
    StudentHealthComponent,
    LandingHeaderComponent,
    LandingFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
