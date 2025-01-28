let aloes = []; // Productos filtrados que se muestran
let carrito = []; // Array para el carrito

// Referencias a elementos del DOM
const inputNombre = document.querySelector('#buscaNombre');
const checkStock = document.querySelector('#addSinStock');
const btBuscar = document.querySelector('.buscar');
const divLista = document.querySelector('.listaProductos');
const itemsCarrito = document.querySelector('.itemsCarrito');
const pTotalCompra = document.querySelector('.totalCompra');
const btnComprar = document.querySelector('.comprar');

// ----- EJECUCIÓN CUANDO CARGA LA PÁGINA -----
window.onload = () => {
    // Copiamos los products a "aloes" para empezar
    aloes = [...products];
    pintaTarjeta(aloes);

    // Eventos
    btBuscar.addEventListener('click', (e) => {
        e.preventDefault();
        filtrarProductos();
    });

    btnComprar.addEventListener('click', () => {
        finalizarCompra();
    });

    // Agregamos un botón de "Vaciar Carrito" dinámico (o ponlo en tu HTML)
    const btnVaciar = document.createElement('button');
    btnVaciar.classList.add('btn', 'btn-warning', 'mt-2', 'w-100');
    btnVaciar.textContent = 'Vaciar Carrito';
    btnVaciar.addEventListener('click', () => {
        vaciarCarrito();
    });
    itemsCarrito.parentElement.appendChild(btnVaciar);
};

// ----- MOSTRAR TARJETAS DE PRODUCTOS -----
function pintaTarjeta(listado) {
    // Limpiamos la lista
    divLista.innerHTML = "";

    listado.forEach((prod) => {
        // Creamos la tarjeta contenedora
        const div = document.createElement('div');
        div.classList.add('col');

        // Texto para el stock dependiendo de la cantidad
        let stockTextHTML = "";
        if (prod.stock === 0) {
            stockTextHTML = `<p class="card-text" style="color:red;font-weight:bold;">Sin stock</p>`;
        } else if (prod.stock <= 4) {
            stockTextHTML = `<p class="card-text" style="color:orange;font-weight:bold;">Quedan pocas unidades (${prod.stock})</p>`;
        } else {
            stockTextHTML = `<p class="card-text">Stock: ${prod.stock} unidades</p>`;
        }

        // Botón Añadir deshabilitado si no hay stock
        const disabledBtn = (prod.stock === 0) ? "disabled" : "";

        div.innerHTML = `
      <div class="card h-100">
        <img src="${prod.imagen}" alt="${prod.nombre}" class="card-img-top"
             style="object-fit: cover; height: 200px; border-top-left-radius: 5px; border-top-right-radius: 5px;" />
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title">${prod.nombre}</h5>
            ${stockTextHTML}
            <p class="card-text">Precio: <span>${prod.precio.toFixed(2)}</span> €</p>
          </div>
          <div class="d-flex align-items-center mt-3">
            <input type="number" class="form-control me-2 cantidadInput" value="1" min="1" max="${prod.stock}">
            <button class="btn btn-success aniadir" ${disabledBtn}>Añadir</button>
          </div>
        </div>
      </div>
    `;

        // Evento al pulsar "Añadir"
        const btnAniadir = div.querySelector('.aniadir');
        btnAniadir.addEventListener('click', () => {
            const cantidad = parseInt(div.querySelector('.cantidadInput').value);
            aniadirCarrito(prod, cantidad);
        });

        // Añadimos la tarjeta al contenedor
        divLista.appendChild(div);
    });
}

// ----- AÑADIR AL CARRITO -----
function aniadirCarrito(producto, cantidad) {
    // Comprobamos stock
    if (producto.stock < cantidad) {
        alert("No hay suficiente stock para añadir esa cantidad.");
        return;
    }

    // Reducimos stock (los retenemos del producto real)
    producto.stock -= cantidad;

    // ¿Ya existe en el carrito?
    const itemExistente = carrito.find((item) => item.producto.id === producto.id);
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            producto: producto,
            cantidad: cantidad
        });
    }

    // Volvemos a pintar todo
    pintaTarjeta(aloes);
    renderCarrito();
}

// ----- RENDERIZAR EL CARRITO -----
function renderCarrito() {
    itemsCarrito.innerHTML = "";

    carrito.forEach((item) => {
        const { producto, cantidad } = item;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('mb-3', 'itemCarrito', 'card');

        itemDiv.innerHTML = `
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-12 col-sm-3">
            <h6 class="mb-1">${producto.nombre}</h6>
          </div>
          <div class="col-12 col-sm-2">
            <input type="number" class="form-control cantidadCarrito" value="${cantidad}" min="1">
          </div>
          <div class="col-12 col-sm-2 mt-2 mt-sm-0">
            <span>${producto.precio}€</span>
          </div>
          <div class="col-12 col-sm-2 mt-2 mt-sm-0">
            <span class="subtotalItem">${(producto.precio * cantidad)}€</span>
          </div>
          <div class="col-12 col-sm-3 mt-2 mt-sm-0">
            <button class="btn btn-danger w-100 eliminarItem">Eliminar</button>
          </div>
        </div>
      </div>
    `;

        // Evento al cambiar la cantidad en el input del carrito
        const inputCantidadCarrito = itemDiv.querySelector('.cantidadCarrito');
        inputCantidadCarrito.addEventListener('change', (e) => {
            const nuevaCantidad = parseInt(e.target.value);

            // Si la cantidad aumenta, hay que comprobar stock
            const diferencia = nuevaCantidad - item.cantidad;
            if (diferencia > 0) {
                // Check si hay stock extra suficiente
                if (producto.stock < diferencia) {
                    alert("No hay suficiente stock para esa cantidad.");
                    e.target.value = item.cantidad; // volver a la cantidad anterior
                    return;
                }
                // Reducir el stock del producto
                producto.stock -= diferencia;
            } else {
                // Si han bajado la cantidad, devolvemos (en positivo) al stock
                producto.stock += Math.abs(diferencia);
            }

            // Actualizamos la cantidad del item
            item.cantidad = nuevaCantidad;
            // Actualizamos en pantalla
            itemDiv.querySelector('.subtotalItem').textContent = (producto.precio * nuevaCantidad) + "€";

            // Repintamos productos para reflejar stock
            pintaTarjeta(aloes);
            recalcularTotal();
        });

        // Evento al pulsar "Eliminar"
        const btnEliminar = itemDiv.querySelector('.eliminarItem');
        btnEliminar.addEventListener('click', () => {
            eliminarDelCarrito(producto.id);
        });

        itemsCarrito.appendChild(itemDiv);
    });

    // Recalcular total
    recalcularTotal();
}

// ----- ELIMINAR DEL CARRITO -----
function eliminarDelCarrito(idProducto) {
    // Encontrar el item en el carrito
    const itemIndex = carrito.findIndex((item) => item.producto.id === idProducto);
    if (itemIndex !== -1) {
        // Devolver la cantidad al stock del producto
        const item = carrito[itemIndex];
        item.producto.stock += item.cantidad;

        // Eliminar del carrito
        carrito.splice(itemIndex, 1);

        // Volver a renderizar
        pintaTarjeta(aloes);
        renderCarrito();
    }
}

// ----- VACIAR CARRITO -----
function vaciarCarrito() {
    // Devolvemos todas las cantidades al stock original
    carrito.forEach((item) => {
        item.producto.stock += item.cantidad;
    });
    // Limpiamos el array
    carrito = [];

    // Repintamos
    pintaTarjeta(aloes);
    renderCarrito();
}

// ----- FINALIZAR COMPRA -----
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    // Aquí, al "finalizar", los productos ya están con el stock reducido,
    // así que solo vaciamos el carrito sin restaurar nada.
    carrito = [];

    // Repintar
    pintaTarjeta(aloes);
    renderCarrito();

    alert("Compra realizada con éxito. Gracias por su compra.");
}

// ----- RECALCULAR TOTAL DEL CARRITO -----
function recalcularTotal() {
    let total = 0;
    carrito.forEach((item) => {
        total += item.producto.precio * item.cantidad;
    });
    pTotalCompra.textContent = `Total: ${total.toFixed(2)}€`;
}

// ----- FILTRAR PRODUCTOS -----
function filtrarProductos() {
    const texto = inputNombre.value.trim().toLowerCase();
    const incluirSinStock = checkStock.checked;

    let filtrados = products.filter((p) => {
        const matchNombre = p.nombre.toLowerCase().includes(texto);
        const matchStock = incluirSinStock ? true : (p.stock > 0);
        return matchNombre && matchStock;
    });

    // Guardamos en aloes y pintamos
    aloes = filtrados;
    pintaTarjeta(aloes);
}
