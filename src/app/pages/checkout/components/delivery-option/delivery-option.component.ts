import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DeliveryOption } from '../../models/delivery-option';

@Component({
  selector: 'app-delivery-option',
  templateUrl: './delivery-option.component.html',
  styleUrls: ['./delivery-option.component.scss']
})
export class DeliveryOptionComponent {
  @Input() deliveryOption: DeliveryOption;
  @Input() isActive: boolean;
  @Output() clicked = new EventEmitter<void>();

  @HostListener('click')
  handleClick(): void {
    if (!this.isActive) {
      this.clicked.emit();
    }
  }
}
