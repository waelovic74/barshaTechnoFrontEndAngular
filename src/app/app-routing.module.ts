import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';

import {AuthGuardService} from './_services/auth-guard.service';
import {AddOffreComponent} from './home/add-offre/add-offre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuardService]},
  { path: 'addOffre', component: AddOffreComponent , canActivate: [AuthGuardService]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
