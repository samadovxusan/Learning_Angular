import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {CardsComponent} from "../cards/cards.component";
import {DecimalPipe, NgForOf} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-profnastillar',
  standalone: true,
  imports: [
    RouterOutlet,
    CardsComponent,
    DecimalPipe,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './profnastillar.component.html',
  styleUrl: './profnastillar.component.scss'
})
export class ProfnastillarComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  profnastil : ProductResponse[] = [];

  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].productName == 'Profnastil') {
          this.profnastil.push(this.products[i]);
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
