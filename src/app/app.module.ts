import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddImmoComponent } from './Components/add-immo/add-immo.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DetailsComponent } from './Components/details/details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { SignUpComponent } from './Components/auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAccountComponent } from './Components/user-account/user-account.component';
import { FilterComponent } from './Components/filter/filter.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddImmoComponent,
    DashboardComponent,
    DetailsComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    UserAccountComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
