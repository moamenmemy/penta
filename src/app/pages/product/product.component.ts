import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  _ProductService=inject(ProductService)
products: Product[] = [];
selectedImage: any;

ngOnInit() {
  this._ProductService.getAllProducts().subscribe({
    next: (res) => {
      console.log(res,'hiii2');
      this.products = res;
    },
    error: (err) => {      console.log('hiii');
    }
  });
}
  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  // غلق المودال
  closeModal() {
    this.selectedImage = null;
  }

 

  trackById(index: number, item: Product) {
    return item.id;
  }
}
