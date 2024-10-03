import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {CardsComponent} from "../cards/cards.component";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {DecimalPipe, NgForOf} from "@angular/common";
import {publish} from "rxjs";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-gumbzalar',
  standalone: true,
  imports: [
    RouterOutlet,
    CardsComponent,
    DecimalPipe,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './gumbzalar.component.html',
  styleUrl: './gumbzalar.component.scss'
})
export class GumbzalarComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  gumbazlar : ProductResponse[] = [];

  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].productName === 'Gumbaz') {
          this.gumbazlar.push(this.products[i]);
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
