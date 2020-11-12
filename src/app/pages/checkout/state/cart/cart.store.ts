import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../../models/product';

export interface CartState extends EntityState<Product> {
}

@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {
  constructor() {
    super();
  }
}
