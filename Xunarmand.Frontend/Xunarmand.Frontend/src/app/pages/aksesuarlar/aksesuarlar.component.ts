import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {CardsComponent} from "../cards/cards.component";
import {DecimalPipe, NgForOf} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-aksesuarlar',
  standalone: true,
  imports: [
    RouterOutlet,
    CardsComponent,
    DecimalPipe,
    NgForOf,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './aksesuarlar.component.html',
  styleUrl: './aksesuarlar.component.scss'
})
export class AksesuarlarComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  aksesuar : ProductResponse[] = [];
  newid : string = "";

  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].productName == 'Aksessuar') {
          this.aksesuar.push(this.products[i]);
        }
      }
    });
  }

  openNewWindow(id: string){
    this.productservice.productID(id).subscribe((data) =>{
      this.router.navigate(['details/'+ data.id]);
      return data;
    });
  }
}
