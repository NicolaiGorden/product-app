import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // title = 'product-app';
  sampleProduct = {
    id: 1,
    name: 'test product',
    price: 999,
    description: "test"
  }
}
