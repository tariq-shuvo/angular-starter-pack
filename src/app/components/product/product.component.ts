import { Component } from '@angular/core';

type productInfo = {
  id: number;
  name: string;
  detail: string;
  price: string;
  image: string;
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:productInfo[] = [{
    "id": 1,
    "name": "hero Product",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  },{
    "id": 2,
    "name": "Product 1",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  },{
    "id": 3,
    "name": "Product 2",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  },{
    "id": 4,
    "name": "Product 3",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  },{
    "id": 5,
    "name": "Product 4",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  },{
    "id": 6,
    "name": "Product 5",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  },{
    "id": 7,
    "name": "Product 6",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://placehold.co/600x400"
  }];
}
