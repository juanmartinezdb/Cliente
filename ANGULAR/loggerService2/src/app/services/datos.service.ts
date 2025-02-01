import { Injectable } from '@angular/core';
import { Predefinida } from '../model/predefinida.model';
import { Empleado } from '../model/persona.model';
import { Sucursal } from '../model/sucursal.model';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  private predefinidas : Predefinida[] = [
       // 🔵 REGISTROS ORDINARIOS
       { tipo: 'registro', nombre: 'Revisión de minibar', descripcion: 'El minibar necesita reposición de bebidas y snacks.' },
       { tipo: 'registro', nombre: 'Cambio de toallas', descripcion: 'El huésped ha solicitado un cambio de toallas en su habitación.' },
       { tipo: 'registro', nombre: 'Limpieza programada', descripcion: 'Limpieza diaria programada en la habitación del huésped.' },
       { tipo: 'registro', nombre: 'Revisión de piscina', descripcion: 'Se necesita control de pH y limpieza en la piscina del hotel.' },
       { tipo: 'registro', nombre: 'Reserva de taxi', descripcion: 'El huésped ha solicitado un taxi a una hora específica.' },
       { tipo: 'registro', nombre: 'Llamada de despertador', descripcion: 'El huésped ha solicitado ser despertado a una hora determinada.' },
       { tipo: 'registro', nombre: 'Gestión de equipaje', descripcion: 'El huésped necesita ayuda con su equipaje en la entrada/salida.' },
       { tipo: 'registro', nombre: 'Mantenimiento de jardín', descripcion: 'Revisión y poda de plantas en las áreas verdes del hotel.' },
       { tipo: 'registro', nombre: 'Control de iluminación', descripcion: 'Verificación de luces en pasillos y zonas comunes.' },
       { tipo: 'registro', nombre: 'Mantenimiento de ascensores', descripcion: 'Revisión programada del sistema de ascensores del hotel.' },
       { tipo: 'registro', nombre: 'Entrega de paquete', descripcion: 'Un huésped ha recibido un paquete en la recepción.' },
       { tipo: 'registro', nombre: 'Pedido de comida a la habitación', descripcion: 'El huésped ha solicitado servicio de room service.' },
       { tipo: 'registro', nombre: 'Ajuste de termostato', descripcion: 'El huésped solicita un ajuste de temperatura en su habitación.' },
       { tipo: 'registro', nombre: 'Revisión de gimnasio', descripcion: 'Mantenimiento y limpieza de equipos en el gimnasio del hotel.' },
       { tipo: 'registro', nombre: 'Control de ruidos en zonas comunes', descripcion: 'Supervisión de nivel de ruido en pasillos y áreas comunes.' },
   
       // ⚠️ INCIDENCIAS
       { tipo: 'incidencia', nombre: 'Avería en aire acondicionado', descripcion: 'El aire acondicionado de la habitación no funciona correctamente.' },
       { tipo: 'incidencia', nombre: 'Televisión sin señal', descripcion: 'El huésped reporta que la televisión no tiene señal o no enciende.' },
       { tipo: 'incidencia', nombre: 'Fuga de agua en baño', descripcion: 'Se ha detectado una fuga de agua en el baño de la habitación.' },
       { tipo: 'incidencia', nombre: 'Pérdida de objeto personal', descripcion: 'El huésped ha extraviado un objeto en las instalaciones del hotel.' },
       { tipo: 'incidencia', nombre: 'Ruidos molestos en habitación', descripcion: 'El huésped reporta ruidos excesivos provenientes de otra habitación.' },
       { tipo: 'incidencia', nombre: 'Tarjeta de acceso no funciona', descripcion: 'El huésped indica que su tarjeta de habitación no abre la puerta.' },
       { tipo: 'incidencia', nombre: 'Avería en ascensor', descripcion: 'El ascensor ha dejado de funcionar y requiere revisión inmediata.' },
       { tipo: 'incidencia', nombre: 'Caja fuerte bloqueada', descripcion: 'El huésped no puede abrir la caja fuerte de su habitación.' },
       { tipo: 'incidencia', nombre: 'Calefacción defectuosa', descripcion: 'El huésped reporta que la calefacción de su habitación no funciona.' },
       { tipo: 'incidencia', nombre: 'Problema de conexión WiFi', descripcion: 'El huésped tiene dificultades para conectarse a la red WiFi del hotel.' },
       { tipo: 'incidencia', nombre: 'Mal olor en habitación', descripcion: 'El huésped reporta un olor desagradable en la habitación.' },
       { tipo: 'incidencia', nombre: 'Falta de agua caliente', descripcion: 'No hay agua caliente en la ducha de la habitación.' },
       { tipo: 'incidencia', nombre: 'Problema con cortinas', descripcion: 'El huésped indica que las cortinas de la habitación están dañadas.' },
       { tipo: 'incidencia', nombre: 'Baño atascado', descripcion: 'Se ha detectado un problema de obstrucción en el baño.' },
       { tipo: 'incidencia', nombre: 'Puerta de habitación dañada', descripcion: 'La cerradura o la puerta presenta problemas de funcionamiento.' },
   
       // 🚨 ALERTAS
       { tipo: 'alerta', nombre: 'Emergencia médica de huésped', descripcion: 'Un huésped requiere asistencia médica urgente.' },
       { tipo: 'alerta', nombre: 'Corte de energía en el hotel', descripcion: 'Se ha producido un apagón en varias áreas del hotel.' },
       { tipo: 'alerta', nombre: 'Discusión fuerte en habitación', descripcion: 'Se reporta una pelea o altercado dentro de una habitación.' },
       { tipo: 'alerta', nombre: 'Fuga de gas detectada', descripcion: 'Se ha percibido un fuerte olor a gas en el hotel.' },
       { tipo: 'alerta', nombre: 'Persona sospechosa en el hotel', descripcion: 'Se ha identificado a una persona con actitud sospechosa en las instalaciones.' },
       { tipo: 'alerta', nombre: 'Principio de incendio en cocina', descripcion: 'Se ha detectado humo en el área de cocina del hotel.' },
       { tipo: 'alerta', nombre: 'Huésped con comportamiento agresivo', descripcion: 'Se reporta un huésped alterado o agresivo en el hotel.' },
       { tipo: 'alerta', nombre: 'Fallo en alarma de incendios', descripcion: 'El sistema de detección de incendios ha dejado de funcionar.' },
       { tipo: 'alerta', nombre: 'Puerta de emergencia bloqueada', descripcion: 'Se ha detectado que una salida de emergencia está obstruida.' },
       { tipo: 'alerta', nombre: 'Desperfecto estructural grave', descripcion: 'Se ha detectado una grieta en la estructura del hotel.' },
       { tipo: 'alerta', nombre: 'Huésped desaparecido', descripcion: 'Un familiar ha reportado que un huésped no ha regresado al hotel.' },
       { tipo: 'alerta', nombre: 'Fuga de agua en calderas', descripcion: 'Se detectó una fuga grave en la sala de calderas del hotel.' },
       { tipo: 'alerta', nombre: 'Evacuación por amenaza externa', descripcion: 'Se requiere evacuación del hotel por amenaza externa.' },
       { tipo: 'alerta', nombre: 'Derrumbe en zona común', descripcion: 'Se ha producido un derrumbe parcial en una zona del hotel.' },
       { tipo: 'alerta', nombre: 'Robos en habitaciones', descripcion: 'Se han reportado robos en varias habitaciones del hotel.' } 
];


private empleados: Empleado[] =  [
  { nombre: 'Manolo', apellidos: 'Pérez García', telefono: '+34 600 123 456', email: 'manolo.perez@hoteljuanillo.com', departamento: 'Mantenimiento' },
  { nombre: 'María', apellidos: 'López Fernández', telefono: '+34 610 234 567', email: 'maria.lopez@hoteljuanillo.com', departamento: 'Recepción' },
  { nombre: 'Pedro', apellidos: 'García Sánchez', telefono: '+34 620 345 678', email: 'pedro.garcia@hoteljuanillo.com', departamento: 'Seguridad' },
  { nombre: 'Carmen', apellidos: 'Santos Ruíz', telefono: '+34 630 456 789', email: 'carmen.santos@hoteljuanillo.com', departamento: 'Limpieza' },
  { nombre: 'Javier', apellidos: 'Torres Martín', telefono: '+34 640 567 890', email: 'javier.torres@hoteljuanillo.com', departamento: 'Conserjería' },
  { nombre: 'Elena', apellidos: 'Gómez Pérez', telefono: '+34 650 678 901', email: 'elena.gomez@hoteljuanillo.com', departamento: 'Reservas' },
  { nombre: 'Antonio', apellidos: 'Fernández Díaz', telefono: '+34 660 789 012', email: 'antonio.fernandez@hoteljuanillo.com', departamento: 'Cocina' },
  { nombre: 'Lucía', apellidos: 'Méndez Ortiz', telefono: '+34 670 890 123', email: 'lucia.mendez@hoteljuanillo.com', departamento: 'Atención al cliente' },
  { nombre: 'Fernando', apellidos: 'Herrera López', telefono: '+34 680 901 234', email: 'fernando.herrera@hoteljuanillo.com', departamento: 'Gerencia' },
  { nombre: 'Isabel', apellidos: 'Navarro Gil', telefono: '+34 690 012 345', email: 'isabel.navarro@hoteljuanillo.com', departamento: 'Marketing' }
]; 

private sucursales: Sucursal[] =[
  { codigo: 'MAL01', nombre: 'Juanillo Málaga Centro', telefono: '+34 952 123 456', ubicacion: 'Málaga, Calle Larios 12' },
  { codigo: 'MAL02', nombre: 'Juanillo Málaga Playa', telefono: '+34 952 654 321', ubicacion: 'Málaga, Paseo Marítimo 45' },
  { codigo: 'MAD01', nombre: 'Juanillo Madrid Gran Vía', telefono: '+34 911 654 321', ubicacion: 'Madrid, Gran Vía 20' },
  { codigo: 'MAD02', nombre: 'Juanillo Madrid Aeropuerto', telefono: '+34 912 987 654', ubicacion: 'Madrid, Avenida de la Hispanidad 5' },
  { codigo: 'BCN01', nombre: 'Juanillo Barcelona Rambla', telefono: '+34 931 987 654', ubicacion: 'Barcelona, La Rambla 32' },
  { codigo: 'BCN02', nombre: 'Juanillo Barcelona Montjuïc', telefono: '+34 933 456 789', ubicacion: 'Barcelona, Carrer de Montjuïc 15' },
  { codigo: 'SEV01', nombre: 'Juanillo Sevilla Centro', telefono: '+34 955 234 567', ubicacion: 'Sevilla, Plaza Nueva 10' },
  { codigo: 'SEV02', nombre: 'Juanillo Sevilla Triana', telefono: '+34 955 678 901', ubicacion: 'Sevilla, Calle Betis 22' },
  { codigo: 'VAL01', nombre: 'Juanillo Valencia Centro', telefono: '+34 963 789 012', ubicacion: 'Valencia, Calle Colón 18' },
  { codigo: 'VAL02', nombre: 'Juanillo Valencia Playa', telefono: '+34 963 890 123', ubicacion: 'Valencia, Avenida de la Malvarrosa 50' }
];

getPredefinidas(): Predefinida [] {
  return this.predefinidas;
}

getEmpleados(): Empleado[] {
  return this.empleados;
}

getSucursales(): Sucursal[] {
  return this.sucursales;
}
}
