import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Product } from '../../models/product';
import { CartQuery } from '../../state/cart/cart.query';
import { CartService } from '../../state/cart/cart.service';

@UntilDestroy()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products = this.cartQuery.selectAll();

  constructor(
    private cartQuery: CartQuery,
    private cartService: CartService
  ) {
  }

  updateProductQuantity(id: number, quantity: number): void {
    this.cartService.updateProductQuantity(id, quantity);
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}
