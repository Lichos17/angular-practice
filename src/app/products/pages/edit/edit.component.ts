import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Product, productCategories } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  product: Partial<Product> = {
    name: '',
    description: '',
    category: 'galletas',
    price: 0,
  };
  productId: string = '';

  productCategories = productCategories;

  constructor(
    private productsServices: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.productId = id;
          return this.productsServices.getProducts();
        })
      )
      .subscribe((res) => {
        this.product = res.data.products.find(
          (product) => product._id === this.productId
        )!;
      });
  }

  updateProduct() {
    this.productsServices
      .updateProduct(this.product, this.productId)
      .subscribe((res) => {
        console.log({ res });
        if (res.status === 'success') {
          this.router.navigate(['/products', 'dashboard']);
        }
      });
  }
}
