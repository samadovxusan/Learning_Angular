import {Component, inject} from '@angular/core';
import {CardsComponent} from "../cards/cards.component";
import {Router, RouterOutlet} from "@angular/router";
import {DecimalPipe, NgForOf} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-dimaxodlar',
  standalone: true,
    imports: [
        CardsComponent,
        RouterOutlet,
        DecimalPipe,
        NgForOf,
        FooterComponent
    ],
  templateUrl: './dimaxodlar.component.html',
  styleUrl: './dimaxodlar.component.scss'
})
export class DimaxodlarComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  demaxod : ProductResponse[] = [];


  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].productName == 'Dimaxod') {
          this.demaxod.push(this.products[i]);
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
