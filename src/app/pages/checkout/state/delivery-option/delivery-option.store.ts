import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { DeliveryOption } from '../../../../models/delivery-option';

export interface DeliveryOptionState extends EntityState<DeliveryOption> {
}

@StoreConfig({ name: 'deliveryOption' })
export class DeliveryOptionStore extends EntityStore<DeliveryOptionState> {
  constructor() {
    super();
  }
}
