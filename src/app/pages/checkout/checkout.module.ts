import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutGuard } from './checkout.guard';
import { CartComponent } from './components/cart/cart.component';
import { DeliveryOptionComponent } from './components/delivery-option/delivery-option.component';
import { DeliveryOptionsComponent } from './components/delivery-options/delivery-options.component';
import { ProductComponent } from './components/product/product.component';
import { CartQuery } from './state/cart/cart.query';
import { CartService } from './state/cart/cart.service';
import { CartStore } from './state/cart/cart.store';
import { DeliveryOptionQuery } from './state/delivery-option/delivery-option.query';
import { DeliveryOptionService } from './state/delivery-option/delivery-option.service';
import { DeliveryOptionStore } from './state/delivery-option/delivery-option.store';


@NgModule({
  declarations: [
    CheckoutComponent,
    DeliveryOptionsComponent,
    DeliveryOptionComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutComponent
      }
    ])
  ],
  providers: [
    CartStore,
    CartQuery,
    CartService,
    DeliveryOptionStore,
    DeliveryOptionQuery,
    DeliveryOptionService,
    CheckoutGuard
  ]
})
export class CheckoutModule {
}
