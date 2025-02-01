import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // IMPORTANTE: se importa CommonModule para *ngIf, *ngFor, ngClass, etc.
import { Registro } from '../model/registro.model';
import { DatosServiceService } from '../services/datos.service.service';
import { RegistroService } from '../services/registro.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  registroForm!: FormGroup;

  // Opciones cargadas desde el servicio
  sucursales = this.datosService.getSucursales();
  empleados = this.datosService.getEmpleados();
  incidenciasPredefinidas = this.datosService.getPredefinidas();

  constructor(
    private fb: FormBuilder,
    private datosService: DatosServiceService,
    private registroService: RegistroService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      // Datos Sucursal
      hotel: ['', Validators.required],
      empleado: ['', Validators.required],
      // Datos Cliente
      nombreC: ['', Validators.required],
      apellidoC: ['', Validators.required],
      habitacionC: ['', Validators.required],
      agencia: [''],
      telefonoC: ['', [Validators.required, Validators.pattern("^[0-9+\\s]*$")]],
      // Datos del Evento
      tituloE: ['', Validators.required],
      descripcionE: ['', Validators.required],
      categoria: ['', Validators.required],
      tipoE: ['', Validators.required],
      fechaE: ['', Validators.required],
      horaE: ['', Validators.required]
      // Los campos ocultos se asignan al enviar
    });
  }

  // Nota: debido a la tipificación de los controles, usa notación de corchetes
  get f() {
    return this.registroForm.controls;
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }
    const registro: Registro = {
      hotel: this.f['hotel'].value,
      empleado: this.f['empleado'].value,
      nombreC: this.f['nombreC'].value,
      apellidoC: this.f['apellidoC'].value,
      habitacionC: this.f['habitacionC'].value,
      agencia: this.f['agencia'].value,
      telefonoC: this.f['telefonoC'].value,
      tituloE: this.f['tituloE'].value,
      descripcionE: this.f['descripcionE'].value,
      categoria: this.f['categoria'].value,
      tipoE: this.f['tipoE'].value,
      fechaE: this.f['fechaE'].value,
      horaE: this.f['horaE'].value,
      fechaCreacion: new Date().toISOString(),
      departamento: '' // Se puede asignar según el empleado seleccionado
    };

    this.registroService.addRegistro(registro);
    this.logger.log('Registro enviado: ' + JSON.stringify(registro));
    console.log('Registro:', registro);
    this.registroForm.reset();
  }
}
