import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() product: any;
  @Output() onProductClick = new EventEmitter<void>();

  handleClick() {
    this.onProductClick.emit()
  }
}
