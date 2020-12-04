import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DeliveryOptionState, DeliveryOptionStore } from './delivery-option.store';

@Injectable()
export class DeliveryOptionQuery extends QueryEntity<DeliveryOptionState> {
  constructor(store: DeliveryOptionStore) {
    super(store);
  }

  hasDeliveryOptions(): boolean {
    return !!this.getCount();
  }
}
