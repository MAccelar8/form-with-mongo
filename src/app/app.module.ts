import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './slider/slider.component';
// import { UserService } from './user.service'
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { AuthGuard } from './authguard.service';
import { AuthService } from './auth.service';
import { SecurePage } from './securepage.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    SliderComponent,
    LoggedinComponent,
    ProfileComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    UserService,
    AuthGuard,
    SecurePage,
    AuthService
  ],
  // UserService
  bootstrap: [AppComponent],
  // declarations: [AppComponent]
})
export class AppModule { }