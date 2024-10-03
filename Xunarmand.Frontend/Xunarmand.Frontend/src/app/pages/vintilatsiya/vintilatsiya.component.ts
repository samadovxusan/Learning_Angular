import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {CardsComponent} from "../cards/cards.component";
import {DecimalPipe, NgForOf} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-vintilatsiya',
  standalone: true,
  imports: [
    RouterOutlet,
    CardsComponent,
    DecimalPipe,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './vintilatsiya.component.html',
  styleUrl: './vintilatsiya.component.scss'
})
export class VintilatsiyaComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  vintelatsiya : ProductResponse[] = [];

  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].productName == 'Vintilatsiya') {
          this.vintelatsiya.push(this.products[i]);
        }
      }
    });
  }
  openNewWindow(id: string) {
    this.productservice.productID(id).subscribe((data) => {
      this.router.navigate(['details/' + data.id]);
      return data;
    });
  }

}
