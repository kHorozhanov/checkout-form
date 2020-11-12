import { Injectable } from '@angular/core';
import { setLoading } from '@datorama/akita';
import { Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DeliveryOptionStore } from './delivery-option.store';

@Injectable()
export class DeliveryOptionService {
  constructor(private store: DeliveryOptionStore) {
  }

  load(): Observable<unknown> {
    return timer(100).pipe(
      setLoading(this.store),
      tap(() => {
        this.store.set([
          {
            id: 1,
            name: 'Курьер',
            deliveryPrice: 59,
            products: [
              {
                id: 1,
                price: 86,
                stock: 10
              },
              {
                id: 2,
                price: 23,
                stock: 3
              }
            ]
          },
          {
            name: 'Самовывоз',
            id: 2,
            deliveryPrice: 0,
            products: [
              {
                id: 1,
                price: 93,
                stock: 2
              },
              {
                id: 2,
                price: 27,
                stock: 4
              }
            ]
          }
        ]);
      })
    );
  }
}
