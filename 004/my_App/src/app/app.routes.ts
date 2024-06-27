import { Routes } from '@angular/router';
import {LoginComponent} from "./companents/pages/login/login.component";
import {RegisterComponent} from "./companents/pages/register/register.component";
import {ContactComponent} from "./companents/pages/contact/contact.component";
import {NavbarComponent} from "./companents/navbar/navbar.component";
import {HomeComponent} from "./companents/pages/home/home.component";

export const routes: Routes = [
  {path : "login", component : LoginComponent },
  {path : "register", component : RegisterComponent },
  {path : "contact", component : ContactComponent },
  {path : "home", component : HomeComponent },

];
