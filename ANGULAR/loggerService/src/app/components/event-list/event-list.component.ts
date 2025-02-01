import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { Registro } from '../../models/registro.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  registros: Registro[] = [];
  filtro: string = '';

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registros = this.registroService.getRegistros();
  }

  filtrar(): void {
    this.registros = this.filtro
      ? this.registroService.filtrarRegistros(this.filtro as any)
      : this.registroService.getRegistros();
  }

  contarPorCategoria() {
    return this.registroService.contarPorCategoria();
  }
}
