import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-page1',
  standalone: false,
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  products: any[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (response: any) => {
        this.products = response.products; // Accessing products array from the API response
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    });
  }

  viewDetails(productId: number): void {
    this.router.navigate(['/product-details'], { queryParams: { id: productId } });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart!');
  }
}