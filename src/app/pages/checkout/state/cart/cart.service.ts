import { Injectable } from '@angular/core';
import { setLoading } from '@datorama/akita';
import { Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartStore } from './cart.store';

@Injectable()
export class CartService {
  constructor(private store: CartStore) {
  }

  load(): Observable<unknown> {
    return timer(200).pipe(
      setLoading(this.store),
      tap(() => this.store.set([
        // {
        //   id: 1,
        //   name: 'Нурофен',
        //   quantity: 1,
        //   stock: 10,
        //   deliveryOptionId: 1,
        //   price: 60
        // },
        // {
        //   id: 2,
        //   name: 'Спазмалгон',
        //   quantity: 2,
        //   stock: 6,
        //   deliveryOptionId: 2,
        //   price: 33
        // }
      ]))
    );
  }

  updateProductQuantity(id: number, quantity: number): void {
    this.store.update(id, { quantity });
  }
}
