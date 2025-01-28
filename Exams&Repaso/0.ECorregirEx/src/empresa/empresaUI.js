import { crearEmpresa, obtenerEmpresas, eliminarEmpresa } from './empresaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-alta-empresa');
    const tablaEmpresas = document.getElementById('tabla-empresas').querySelector('tbody');

    // Función para renderizar la tabla
    const renderTablaEmpresas = () => {
        const empresas = obtenerEmpresas();
        console.log(empresas);

        tablaEmpresas.innerHTML = '';
        empresas.forEach(empresa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.direccion}</td>
                 <td>
                    <button class="editar" data-id="${empresa.id}">Editar</button>
                    <button class="eliminar" data-id="${empresa.id}">Eliminar</button>
                </td>
            `;
            tablaEmpresas.appendChild(fila);

        });
        //((CORRECCION)) TIENE QUE ESTAR DENTRO DEL RENDER TABLA PARA QUE TENGA ALGO DONDE CARGARSER
        // Asignar eventos a los botones de editar y eliminar
        document.querySelectorAll('.editar').forEach(btn => {
            // alert(`Editar empresa`);
            btn.addEventListener('click', (e) => {
                const empresaId = e.target.dataset.id;
                // Lógica para editar la empresa 
                //me falta editar para que se vea bien, y para que la funcion de editar salga bien.(correccion)          
                alert(`Editar empresa con ID: ${empresaId}`);
                const boton =document.querySelector("#form-alta-empresa").lastElementChild;
                 boton.textContent="Editar Empresa";

                // Aquí puedes cargar los datos en un formulario para editar
                //uso los datos del input para editar el array donde se almacen las empresas (CORRECCION)
                boton.addEventListener("click", ()=>{
                    empresas[empresaId-1].nombre = document.querySelector("#nombre").value;
                    empresas[empresaId-1].direccion = document.querySelector("#direccion").value;
                })
                
            });
        });
    
        document.querySelectorAll('.eliminar').forEach(btn => {
            // alert(`Editar empresa`);
            btn.addEventListener('click', (e) => {
                const empresaId = e.target.dataset.id;
                alert(`Eliminar empresa con ID: ${empresaId}`);
                eliminarEmpresa(empresaId);
                renderTablaEmpresas(); // Recargar la tabla después de eliminar
            });
        });
    };



// Manejo del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = form.nombre.value;
    const direccion = form.direccion.value;

    crearEmpresa(nombre, direccion);
    renderTablaEmpresas();

    // Limpiar el formulario
    form.reset();
});

// Cargar la tabla inicialmente
renderTablaEmpresas();
});
