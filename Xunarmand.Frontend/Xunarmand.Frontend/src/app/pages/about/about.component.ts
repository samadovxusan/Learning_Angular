import { Component } from '@angular/core';
import {BattnsComponent} from "../../companents/battns/battns.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        BattnsComponent,
        RouterOutlet
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
