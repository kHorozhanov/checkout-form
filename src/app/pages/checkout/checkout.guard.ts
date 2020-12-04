import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartQuery } from './state/cart/cart.query';
import { CartService } from './state/cart/cart.service';
import { DeliveryOptionQuery } from './state/delivery-option/delivery-option.query';
import { DeliveryOptionService } from './state/delivery-option/delivery-option.service';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(
    private cartQuery: CartQuery,
    private cartService: CartService,
    private deliveryOptionQuery: DeliveryOptionQuery,
    private deliveryOptionService: DeliveryOptionService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return undefined;
  }
}
