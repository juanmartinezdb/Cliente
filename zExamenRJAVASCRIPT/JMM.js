const tareas = [
    { titulo: "Tarea Primera", vence: "2025-1-16", prioridad: "alta", estado: true, creada: "2017-1-16", },
    { titulo: "Tarea Segunda", vence: "2026-1-16", prioridad: "media", estado: false, creada: "2016-1-16", },
    { titulo: "Tarea Tercera", vence: "2025-6-16", prioridad: "baja", estado: true, creada: "2021-1-19", },
    { titulo: "Tarea Cuarta", vence: "2025-8-16", prioridad: "alta", estado: true, creada: "2020-1-18", },
    { titulo: "Tarea Quinta", vence: "2025-9-21", prioridad: "media", estado: true, creada: "2024-12-16", },
];
window.onload = () => {
    pintaTareas();
};
///////////HTMLs
// formulario
const titulo = document.querySelector('#titulo');
const vencimiento = document.querySelector('#vencimiento');
const prioridadRadio = document.querySelectorAll('input[name="prioridad"]');
let prioridad = "";
const aniadir = document.querySelector('.aniadir');
const hoy = new Date();

//validaciones
const validaciones = document.querySelectorAll('.valida')
const tituloV = document.querySelector('.tituloV');
const venceV = document.querySelector('.venceV');
const prioV = document.querySelector('.prioridadV');


//lateral
const tituloLateral = document.querySelector('.tituloL');
const vencimientoLateral = document.querySelector('.venceL');
const prioridadLateral = document.querySelector('.prioridadL');
const creacionLateral = document.querySelector('.creacionL');

//consola
const consola = document.querySelector('.consola');

//tareas
const listaTareas = document.querySelector('.listaTareas');

//////////////VALIDACION

const validacion = () => {
    validaciones.forEach(v => v.innerHTML = "");
    let validado = true;
    //titulo
    console.log(titulo.value.length);
    if (titulo.value.length < 10 || titulo.value.length > 40) {
        tituloV.textContent = "el titulo debe tener entre 10 y 40 caracteres";
        validado = false;
    }
    if (tareas.findIndex(t => t.titulo == titulo.value)!=-1){
        validado= false;
        tituloV.textContent = "Ya hay una tarea con este nombre programada";
        
    }
    //vencimiento
    console.log(vencimiento.value);

    const vence = new Date(vencimiento.value);
console.log(vence);


    if (vence <= hoy) {
        venceV.textContent = 'La fecha debe ser posterior al dia de hoy';
        validado = false;
    }

    //radio
    let seleccionado = false;
    prioridadRadio.forEach(radio => {
        if (radio.checked) {
            seleccionado = true;
            prioridad = radio.id;
            console.log(prioridad);
        }
    });
    if (!seleccionado) {
        prioV.textContent = "debe seleccionar una prioridad";
        validado = false;
    }
    if (validado) {
        aniadirTarea();
    }

}

const aniadirTarea = () => {
    let tarea = { titulo: titulo.value, vence: vencimiento.value, prioridad: prioridad, estado: true, creada: hoy };
    tareas.push(tarea);
    console.log('Tarea Añadida');

    pintaTareas();

}

//////PINTA TAREAS
pintaTareas = () => {
    listaTareas.innerHTML = "";
    // filtrado de las completadas por estado.
    tareas.filter(t => t.estado).forEach(t => {
        const div = document.createElement('div');
        let prio = "";
        div.classList.add('col');
        listaTareas.appendChild(div);

        // colores de la prioridad
        if (t.prioridad == 'alta') {
            prio = "bg-danger";
        } else if (t.prioridad == 'media') {
            prio = "bg-warning";
        } else {
            prio = "bg-success";
        }
        div.innerHTML = `
        <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title tituloC">${t.titulo}</h5>
                    <p class="venceC">Vence: ${t.vence}</p>
                    <p class="${prio} prioC">${t.prioridad}</p>
                </div>
                <div class="card-footer">
                </div>
            </div>
        `;
        div.addEventListener('click', () => {
            div.querySelector('.card-footer').innerHTML = `
                        <div class="d-flex">
                <button class="btn btn-warning edita">Editar</button>
                <button class=" btn btn-danger borra">Borrar</button>
                <button class=" btn btn-success completa">completar</button>
            </div>
            `
// EL EDITAR ME ESTA FALLANDO
//             Editar
            div.querySelector('.edita').addEventListener('click', () => {
                titulo.value = div.querySelector('.tituloC').textContent;
                // let prio = div.querySelector('.prioC').textContent;
                // vencimiento.value = div.querySelector('.venceC').textContent;

            });

            //Eliminar
            div.querySelector('.borra').addEventListener('click', () => {
                if (confirm('Quieres borrar esta Tarea?')) {
                    let title = div.querySelector('.tituloC').textContent;
                    console.log(title);
                    const indice = tareas.findIndex(t => t.titulo == title);
                    if (indice !== -1) {
                        tareas.splice(indice, 1);
                    }
                    pintaTareas();
                };


            });

            //Completar tarea
            div.querySelector('.completa').addEventListener('click', () => {
                let title = div.querySelector('.tituloC').textContent;
                console.log(title);
                const indice = tareas.findIndex(t => t.titulo == title);
                if (indice !== -1) {
                    tareas[indice].estado = false;
                }
                pintaTareas();
            });
        });

    });
};

//LISTENERS
aniadir.addEventListener('click', (e) => {
    e.preventDefault();
    validacion();
});

consola.addEventListener('click', () => console.log(tareas));






// Botones:
// Editar (la info de la tarjeta se pasa al formulario) (aparece un panel lateral con los datos)
//añadir botones de confirmar o cancelar edicion que solo apareceran si procede.

//Eliminar, elimina la tarea del arrayk

//marcar como completa se registra la propieda completada y desaparece de la lista de tareas.

