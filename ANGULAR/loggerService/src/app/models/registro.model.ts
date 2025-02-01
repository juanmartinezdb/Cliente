import { Persona } from './persona.model';

export type RegistroCategoria = 'log' | 'warn' | 'error';

export interface Registro {
  id: number;
  empleado: Persona;
  cliente: string;
  fechaEvento: Date;
  fechaCreacion: Date;
  titulo: string;
  descripcion: string;
  categoria: RegistroCategoria;
}
