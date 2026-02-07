import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _httpClient=inject(HttpClient)

 getAllProducts():Observable<Product[]>{
  return this._httpClient.get<Product[]>('/assets/data/product.json')
 }
}
