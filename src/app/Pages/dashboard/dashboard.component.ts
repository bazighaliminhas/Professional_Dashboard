import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
  cartCount: number = 0; // Track the cart count
  cartItems: any[] = [];
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  openSettings() {
    const username = localStorage.getItem('username');
    if (username) {
      alert('Welcome, ${username}');
    } else {
      alert('No user found in local storage');
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    this.router.navigate(['/login']); 
  }

  goToCart() {
    this.router.navigate(['/cart']); 
  }

  updateCartCount() {
    const cartItems = this.cartService.getCartItems();
    this.cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); 
  }
}