import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products = [
    {"id": 1, "name": "Wireless Headphones", "price": 99, "description": "Over-ear noise-canceling headphones with Bluetooth connectivity."},
    {"id": 2, "name": "Gaming Mouse", "price": 49, "description": "Ergonomic gaming mouse with customizable buttons and RGB lighting."},
    {"id": 3, "name": "Mechanical Keyboard", "price": 120, "description": "High-quality mechanical keyboard with RGB backlighting and customizable switches."},
    {"id": 4, "name": "Smartphone Stand", "price": 15, "description": "Adjustable stand for smartphones and tablets with anti-slip base."},
    {"id": 5, "name": "Portable Power Bank", "price": 35, "description": "10,000mAh power bank with fast charging capabilities."},
    {"id": 6, "name": "USB-C Hub", "price": 60, "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader."},
    {"id": 7, "name": "Wireless Charger", "price": 25, "description": "Fast wireless charging pad compatible with all Qi-enabled devices."},
    {"id": 8, "name": "External SSD", "price": 150, "description": "1TB portable SSD with high-speed data transfer."},
    {"id": 9, "name": "Smart LED Bulb", "price": 20, "description": "Color-changing LED bulb with smart home integration."},
    {"id": 10, "name": "Bluetooth Speaker", "price": 70, "description": "Portable Bluetooth speaker with deep bass and waterproof design."},
    {"id": 11, "name": "Webcam", "price": 80, "description": "1080p HD webcam with built-in microphone and autofocus."},
    {"id": 12, "name": "Ergonomic Office Chair", "price": 250, "description": "Comfortable office chair with lumbar support and adjustable armrests."},
    {"id": 13, "name": "Standing Desk", "price": 400, "description": "Adjustable standing desk with electric height control."},
    {"id": 14, "name": "Smart Watch", "price": 200, "description": "Fitness tracker and smartwatch with heart rate monitoring and GPS."},
    {"id": 15, "name": "Noise-Canceling Earbuds", "price": 130, "description": "True wireless earbuds with active noise cancellation."},
    {"id": 16, "name": "4K Monitor", "price": 350, "description": "Ultra HD 4K monitor with high refresh rate and HDR support."},
    {"id": 17, "name": "Electric Toothbrush", "price": 50, "description": "Smart electric toothbrush with multiple brushing modes and app connectivity."},
    {"id": 18, "name": "Mini Projector", "price": 180, "description": "Compact projector with HD resolution and wireless screen mirroring."},
    {"id": 19, "name": "Robot Vacuum", "price": 300, "description": "Smart robotic vacuum cleaner with automatic scheduling and mapping."},
    {"id": 20, "name": "Digital Drawing Tablet", "price": 220, "description": "Graphic drawing tablet with pressure-sensitive pen and customizable buttons."}
  ]

  getProducts(): Observable<any[]> {
    return of(this.products)
  }

  getProductById(id: number): Observable<any> {
    return of(this.products.find(product => product.id === id));
  }

  constructor() { }
}
