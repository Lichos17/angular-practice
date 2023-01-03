import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, productCategories } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  form: Partial<Product> = {
    name: '',
    description: '',
    category: 'galletas',
    price: 0,
  };

  productCategories = productCategories;

  constructor(
    private productsServices: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/auth', 'login']);
    }
  }

  createProduct() {
    console.log(this.form);

    this.productsServices.createProduct(this.form).subscribe((res) => {
      if (res.status === 'success') {
        this.router.navigate(['/products', 'dashboard']);
      }
    });
  }
}
