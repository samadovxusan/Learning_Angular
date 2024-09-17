import { Component } from '@angular/core';
import {ProductResponse} from "../../interfaces/product-response";
import {DecimalPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    DecimalPipe,
    NgForOf
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cars: ProductResponse[] = [
    {
      Name: 'Tesla Model S',
      Image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      Price: 79999,
      Description: 'A premium electric sedan with cutting-edge technology.',
      Type: 'Electric',
    },
    {
      Name: 'Ford Mustang',
      Image: 'https://example.com/mustang.jpg',
      Price: 55999,
      Description: 'A classic American muscle car with powerful performance.',
      Type: 'Gasoline',
    },
    {
      Name: 'Toyota Prius',
      Image: 'https://example.com/prius.jpg',
      Price: 24999,
      Description: 'A fuel-efficient hybrid car ideal for city commuting.',
      Type: 'Hybrid',
    },
    {
      Name: 'Tesla Model S',
      Image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      Price: 79999,
      Description: 'A premium electric sedan with cutting-edge technology.',
      Type: 'Electric',
    },
    {
      Name: 'Ford Mustang',
      Image: 'https://example.com/mustang.jpg',
      Price: 55999,
      Description: 'A classic American muscle car with powerful performance.',
      Type: 'Gasoline',
    },
    {
      Name: 'Toyota Prius',
      Image: 'https://example.com/prius.jpg',
      Price: 24999,
      Description: 'A fuel-efficient hybrid car ideal for city commuting.',
      Type: 'Hybrid',
    }
  ];

}
