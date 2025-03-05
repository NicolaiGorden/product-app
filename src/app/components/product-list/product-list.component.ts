import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{
  products: any[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })

    this.searchSubject.pipe(
      debounceTime(300), // Wait 300ms before making a request
      distinctUntilChanged() // Ignore if input hasn't changed
    ).subscribe(query => {
      this.productService.searchProducts(query).subscribe(data => {
        this.products = data;
      });
    });
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
  }
}
