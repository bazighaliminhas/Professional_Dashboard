import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.queryParamMap.get('id');
    if (productId) {
      this.apiService.getProductById(Number(productId)).subscribe({
        next: (data) => {
          this.product = data; // Fetch product details
        },
        error: (error) => {
          console.error('Error fetching product details:', error);
        }
      });
    }
  }
}
