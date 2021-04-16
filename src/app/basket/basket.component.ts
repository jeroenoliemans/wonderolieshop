import { Component, OnInit } from '@angular/core';
import { BasketItem } from '../interfaces/basketItem';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketItems: BasketItem[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBasketItems();
  }

  getBasketItems(): void {
    this.basketService.getBasketItems()
      .subscribe(basketItems => this.basketItems = basketItems);
  }

  clearBasket(): void {
    this.basketService.clearBasket()
      .subscribe(basketItems => this.basketItems = basketItems);
  }

  increaseQuantity(productId: number): void {
    console.log(productId);
    this.basketService.increaseQuantity(productId)
      .subscribe(basketItems => this.basketItems = basketItems);
  }

  decreaseQuantity(productId: number): void {
    this.basketService.decreaseQuantity(productId)
      .subscribe(basketItems => this.basketItems = basketItems);
  }

  get totalCost(): number {
    let totalPrice = 0;

    this.basketItems.forEach(basketItem => {
      totalPrice += (basketItem.price * basketItem.quantity)
    });

    return totalPrice;
  }
}