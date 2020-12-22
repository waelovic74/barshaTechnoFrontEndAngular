import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { OffreListComponent } from './home/offres-list/offres-list.component';
import { OffresCalendrieComponent } from './home/offres-calendrie/offres-calendrie.component';
import {AuthGuardService} from './_services/auth-guard.service';
import { AddOffreComponent } from './home/add-offre/add-offre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    OffreListComponent,
    OffresCalendrieComponent,
    AddOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
