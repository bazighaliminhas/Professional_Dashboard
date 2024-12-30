import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
    this.loadCart();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.total = parseFloat(this.total.toFixed(2)); // Ensure proper formatting
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }
}

