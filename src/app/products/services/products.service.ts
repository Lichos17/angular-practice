import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{
    status: string;
    data: { products: Product[] };
  }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );

    return this.http.get<{
      status: string;
      data: { products: Product[] };
    }>(`${this.baseUrl}/products`, { headers });
  }

  createProduct(body: Partial<Product>): Observable<{
    status: string;
    data: { products: Product[] };
  }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );

    return this.http.post<{
      status: string;
      data: { products: Product[] };
    }>(`${this.baseUrl}/products`, body, { headers });
  }

  updateProduct(
    body: Partial<Product>,
    id: string
  ): Observable<{
    status: string;
    data: { products: Product[] };
  }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );

    return this.http.put<{
      status: string;
      data: { products: Product[] };
    }>(`${this.baseUrl}/products/${id}`, body, { headers });
  }
}
