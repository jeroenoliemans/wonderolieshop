import { Injectable } from '@angular/core';
import { BasketItem } from '../interfaces/basketItem';
import { Product } from '../interfaces/product';


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
      description: product.description,
      amount: 1
    });
  }

  getBasketItems(): BasketItem[] {
    return this.basketItems;
  }

  clearBasket() {
    this.basketItems = [];
    return this.basketItems;
  }
}