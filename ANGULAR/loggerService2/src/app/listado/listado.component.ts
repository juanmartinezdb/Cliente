import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Registro } from '../model/registro.model';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  registros: Registro[] = [];
  categoriaFilter: 'registro' | 'incidencia' | 'alerta' | null = null;

  constructor(private registroService: RegistroService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const cat = params.get('categoria');
      this.categoriaFilter = (cat === 'registro' || cat === 'incidencia' || cat === 'alerta') ? cat : null;
      this.loadRegistros();
    });
  }

  loadRegistros(): void {
    this.registroService.getRegistros().subscribe(regs => {
      this.registros = this.categoriaFilter ? regs.filter(r => r.categoria === this.categoriaFilter) : regs;
    });
  }

  onEliminar(registro: Registro): void {
    this.registroService.removeRegistro(registro);
  }
}
