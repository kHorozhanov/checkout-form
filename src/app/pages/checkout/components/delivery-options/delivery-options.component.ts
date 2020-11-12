import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DeliveryOption } from '../../models/delivery-option';
import { DeliveryOptionQuery } from '../../state/delivery-option/delivery-option.query';
import { DeliveryOptionService } from '../../state/delivery-option/delivery-option.service';

@UntilDestroy()
@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.scss']
})
export class DeliveryOptionsComponent {
  deliveryOptions = this.deliveryOptionQuery.selectAll();

  constructor(
    private deliveryOptionService: DeliveryOptionService,
    private deliveryOptionQuery: DeliveryOptionQuery
  ) {
  }

  trackById(index: number, item: DeliveryOption): number {
    return item.id;
  }
}
