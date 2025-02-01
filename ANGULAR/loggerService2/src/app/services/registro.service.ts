import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../model/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private registros: Registro[] = [];
  private registrosSubject = new BehaviorSubject<Registro[]>(this.registros);

  constructor() {}

  getRegistros(): Observable<Registro[]> {
    return this.registrosSubject.asObservable();
  }

  addRegistro(registro: Registro): void {
    this.registros.push(registro);
    this.registrosSubject.next(this.registros);
  }

  removeRegistro(registro: Registro): void {
    this.registros = this.registros.filter(r => r !== registro);
    this.registrosSubject.next(this.registros);
  }
}
