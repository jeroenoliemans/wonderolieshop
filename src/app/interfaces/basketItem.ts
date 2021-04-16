import { Product }  from './product';

export interface BasketItem extends Product {
    quantity: number
}