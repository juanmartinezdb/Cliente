import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../logger.service';
import { RegistroService } from '../../services/registro.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  registroForm: FormGroup;
  empleados: Persona[] = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' }
  ];
  categorias = [
    { value: 'log', label: 'Log' },
    { value: 'warn', label: 'Warn' },
    { value: 'error', label: 'Error' }
  ];

  constructor(
    private fb: FormBuilder,
    private registroService: RegistroService,
    private logger: LoggerService
  ) {
    this.registroForm = this.fb.group({
      empleado: [null, Validators.required],
      cliente: ['', Validators.required],
      fechaEvento: [null, Validators.required],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', Validators.required],
      categoria: ['log', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registroForm.valid) {
      const formValue = this.registroForm.value;
      // Se agrega el registro; la fechaCreacion se asigna automáticamente en el servicio
      this.registroService.agregarRegistro(formValue);

      const mensaje = `${formValue.titulo}: ${formValue.descripcion}`;
      if (formValue.categoria === 'log') {
        this.logger.log(mensaje);
      } else if (formValue.categoria === 'warn') {
        this.logger.warn(mensaje);
      } else if (formValue.categoria === 'error') {
        this.logger.error(mensaje);
      }

      // Reinicia el formulario, manteniendo la categoría por defecto
      this.registroForm.reset({ categoria: 'log' });
    }
  }
}
