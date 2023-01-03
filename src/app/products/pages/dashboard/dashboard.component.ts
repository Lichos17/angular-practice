import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  displayedColumns: string[] = ['name', 'category', 'price', 'description'];

  constructor(
    private productsServices: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsServices.getProducts().subscribe((res) => {
      this.products = res.data.products;
    });
  }

  editProduct(product: Product) {
    this.router.navigate(['/products', product._id]);
  }
}
