import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
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
