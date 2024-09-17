import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../../companents/navbar/navbar.component";
import {MatChipsModule} from '@angular/material/chips';
import {BattnsComponent} from "../../companents/battns/battns.component";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MatChipsModule,
    BattnsComponent,
    FooterComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',


})
export class MenuComponent {

}
