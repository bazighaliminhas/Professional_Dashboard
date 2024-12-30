import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = []; // Array to store cart items

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  getCartItems() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find((item) => item.id === productId);
    if (product && quantity > 0) {
      product.quantity = quantity;
    } else {
      this.cart = this.cart.filter((item) => item.id !== productId);
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}