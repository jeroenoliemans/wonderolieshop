import { Product }  from './product';

export interface BasketItem extends Product {
    amount: number
}