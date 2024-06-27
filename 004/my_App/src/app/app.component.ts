
import { RouterOutlet } from '@angular/router';
import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import {HomeComponent} from "./companents/pages/home/home.component";
import {NavbarComponent} from "./companents/navbar/navbar.component";
import * as https from "node:https";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_App';
}
