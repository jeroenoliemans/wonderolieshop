import { Injectable } from '@angular/core';
import { BasketItem } from '../interfaces/basketItem';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basketItems: BasketItem[] = []

  constructor() { }

  addToBasket(product: Product):void {
    // check if product id is availalable in array
    // then increase amount
    // otherwise
    this.basketItems.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      quantity: 1
    });
  }

  getBasketItems(): Observable<BasketItem[]> {
    return of(this.basketItems);
  }

  clearBasket(): Observable<BasketItem[]> {
    this.basketItems = [];
    return of(this.basketItems);
  }

  increaseQuantity(productId: number): Observable<BasketItem[]> {
    this.basketItems.forEach(basketItem => {
        if (basketItem.id === productId) {
          basketItem.quantity += 1;
        }
    });

    return of(this.basketItems);
  }

  decreaseQuantity(productId: number): Observable<BasketItem[]> {
    this.basketItems.forEach(basketItem => {
        if (basketItem.id === productId && basketItem.quantity > 1) {
          basketItem.quantity -= 1;
        }
    });

    return of(this.basketItems);
  }
}