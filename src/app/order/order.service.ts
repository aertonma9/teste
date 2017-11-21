
import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detalhi/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detalhi/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

  constructor ( private cartService: ShoppingCartService ) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }


}
