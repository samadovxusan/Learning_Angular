import {Component, inject} from '@angular/core';
import {DecimalPipe, NgForOf} from "@angular/common";
import {Router, RouterOutlet} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {ProductResponse} from "../../interfaces/product-response";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    DecimalPipe,
    NgForOf,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  router = inject(Router);
  productservice = inject(ProductService);

  products : ProductResponse[] = [];
  demaxod : ProductResponse[] = [];
  aksesuar : ProductResponse[] = [];
  vintelatsiya : ProductResponse[] = [];
  gumbazlar : ProductResponse[] = [];
  profnastil : ProductResponse[] = [];

  constructor() {
    this.productservice.product({}).subscribe((data) =>{
      this.products = (data)
      for (let i = 0; i < this.products.length; i++) {
        console.log(this.products[i])
      }
    });

  }
  openNewWindow(id: string){
    this.productservice.productID(id).subscribe((data) =>{
      this.router.navigate(['details/'+ data.id]);
      return data;
    });
} }
