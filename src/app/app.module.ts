import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const appRoutes: Routes = [
  { path: 'todos', component: HomeComponent },
  { path: 'contact',      component: ContactComponent },


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MaterialModule,


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
