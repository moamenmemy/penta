import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interface/product';
import productData from '../product.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Return embedded JSON to avoid server-side HTTP call during prerender
  getAllProducts(): Observable<Product[]> {
    return of(productData as Product[]);
  }
}
