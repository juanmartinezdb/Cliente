import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { CurrencyPipe, JsonPipe, NgIf } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: Product | undefined;
  constructor (
     private route: ActivatedRoute,
    private cartService: CartService
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  
  }
  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Producto añadido al carro');
  }
}
