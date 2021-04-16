import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

// import data 
import products from '../../data/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    let productItems: Product[] = products;


    return productItems;
  }

  getProduct(id: number): Product {
    const product = products.find(product => product.id === id) as Product;
    return product;
  }
}