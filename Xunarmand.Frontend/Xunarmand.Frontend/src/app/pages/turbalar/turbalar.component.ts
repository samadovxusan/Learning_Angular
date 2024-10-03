import {Component, inject} from '@angular/core';
import {DecimalPipe, NgForOf} from "@angular/common";
import {Router, RouterOutlet} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-turbalar',
  standalone: true,
    imports: [
        DecimalPipe,
        NgForOf,
        RouterOutlet,
        FooterComponent
    ],
  templateUrl: './turbalar.component.html',
  styleUrl: './turbalar.component.scss'
})
export class TurbalarComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  turuba : ProductResponse[] = [];


  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        console.log(data)
        if (this.products[i].productName == 'Turuba') {
          this.turuba.push(this.products[i]);
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
