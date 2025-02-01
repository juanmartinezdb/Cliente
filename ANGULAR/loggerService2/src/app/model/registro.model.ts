export interface Registro {
    // Datos Sucursal
    hotel: string;         // Código o nombre de la sucursal
    empleado: string;      // En este ejemplo, usamos el email del empleado
  
    // Datos Cliente
    nombreC: string;
    apellidoC: string;
    habitacionC: string;
    agencia?: string;      // Opcional
    telefonoC: string;
  
    // Datos del Evento
    tituloE: string;
    descripcionE: string;
    categoria: 'registro' | 'incidencia' | 'alerta';
    tipoE: string;         // Tipo de evento predefinido (según la categoría)
    fechaE: string;        // Formato YYYY-MM-DD
    horaE: string;         // Formato HH:mm
  
    // Datos ocultos (se asignan al enviar)
    fechaCreacion: string; // Fecha y hora actual en ISO
    departamento: string;  // Se asigna según el empleado o se deja para rellenar luego
  }
  