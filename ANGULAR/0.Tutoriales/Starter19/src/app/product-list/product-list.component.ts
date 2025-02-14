import { Component } from '@angular/core';

import { products } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('Esto es un window.alert emergente que se activa con la funcion share()!');
  }

  onNotify() {
    window.alert('Te avisa cuando este de oferta, esto es una lert de onNotify()');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/