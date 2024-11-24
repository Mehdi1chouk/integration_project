import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImmoComponent } from "./Components/add-immo/add-immo.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { DetailsComponent } from "./Components/details/details.component";
import { LoginComponent } from './Components/auth/login/login.component';
import { SignUpComponent } from './Components/auth/sign-up/sign-up.component';
import { UserAccountComponent } from './Components/user-account/user-account.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'add-immo', component: AddImmoComponent },
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'UserAccount', component: UserAccountComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
