import { Injectable } from '@angular/core';
import { Registro, RegistroCategoria } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private registros: Registro[] = [];
  private idCounter = 1;

  constructor() {}

  agregarRegistro(registro: Omit<Registro, 'id' | 'fechaCreacion'>) {
    const nuevoRegistro: Registro = {
      ...registro,
      id: this.idCounter++,
      fechaCreacion: new Date()
    };
    this.registros.push(nuevoRegistro);
  }

  getRegistros(): Registro[] {
    return this.registros;
  }

  filtrarRegistros(categoria?: RegistroCategoria): Registro[] {
    if (!categoria) return this.registros;
    return this.registros.filter(reg => reg.categoria === categoria);
  }

  contarPorCategoria() {
    return {
      log: this.registros.filter(reg => reg.categoria === 'log').length,
      warn: this.registros.filter(reg => reg.categoria === 'warn').length,
      error: this.registros.filter(reg => reg.categoria === 'error').length,
    };
  }
}
