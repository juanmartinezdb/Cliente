import { Component, Input, Output, EventEmitter,} from '@angular/core';
import { Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;
  
  @Output() notificacion = new EventEmitter();
  
}
