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
    this.basketItems = this.basketService.getBasketItems();
  }

  clearBasket(): void {
    this.basketService.clearBasket();
  }
}