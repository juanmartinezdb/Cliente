import { Component, NgModule } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [CommonModule, NgModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '' 
  });

  constructor (
    private cartService : CartService,
    private formBuilder : FormBuilder
  ){}

  onSubmit() : void  {
    this.items = this.cartService.clearCart();
    console.warn(' pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
