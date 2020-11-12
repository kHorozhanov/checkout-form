import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartState, CartStore } from './cart.store';

@Injectable()
export class CartQuery extends QueryEntity<CartState> {
  constructor(store: CartStore) {
    super(store);
  }
}
