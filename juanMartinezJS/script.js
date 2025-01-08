const resultados = document.querySelector(".resultados");
const checkboxGenres = document.querySelector(".checkboxGenres");
const selectCountries = document.querySelector("#country");
const barraBuscador = document.querySelector(".barraBuscador");
const bfilters = document.querySelectorAll(".bfilter");
const cantidad = document.querySelector(".cantidad");
const from = document.querySelector(".from");
const to = document.querySelector(".to");


const marcar = (e)=> {
   if(document.querySelector(".bg-primary-subtle")){
    document.querySelectorAll(".bg-primary-subtle").forEach(c => c.classList.remove("bg-primary-subtle"));
}
e.target.parentElement.classList.add("bg-primary-subtle");
}


const crearTarjeta = (peli) => {
    const div = document.createElement("div");
    resultados.appendChild(div);
    div.innerHTML = `
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${peli.Title}</h5>
            <img src="${peli.Images[0]}"
            alt="imagen pelicula" style="width: 150px;">
            <button class="btn btn-secondary detalles ms-3" id="${peli.imdbID}">Details</button>
            <div class="gen${peli.imdbID} mb-3">
            </div>             
        </div>
    </div>
`
    let generos = document.querySelector(".gen" + peli.imdbID);
    const generosArray = peli.Genre.split(", ");
    generosArray.forEach(gen => {
        const span = document.createElement("span");
        span.classList.add("badge", "text-bg-primary", "mx-1");
        span.textContent = gen;

        generos.appendChild(span);
    });
    div.querySelector(".detalles").addEventListener("click", mostrarDetalles);
    div.addEventListener("click", marcar);

}


const pintaGeneros = () => {
    const arrayGenders = genders.sort((a, b) => a.localeCompare(b));
    arrayGenders.forEach(gen => {
        const div = document.createElement("div");
        div.classList.add("form-check", "me-3");

        div.innerHTML = `
        <div class="form-check me-3">
                    <input class="form-check-input gfilter" type="checkbox" id="${gen}" value="${gen}">
                    <label class="form-check-label" for="${gen}">${gen}</label>
        </div>
        `
        checkboxGenres.appendChild(div);
    })
}



const pintaCountries = () => {
    countries.forEach(con => {
        const option = document.createElement("option");
        option.textContent = con;
        option.value = con;
        selectCountries.appendChild(option);
    })
}



const pintaYears = (select, year=2000) => {
    select.innerHTML="";
    const today = new Date();
    const option = document.createElement("option");
    option.textContent = "----";
    option.value = "";
    select.appendChild(option);
    for (let i = year; i <= today.getFullYear(); i++) {
        const option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
}




pintaGeneros();
pintaCountries();
pintaYears(to);
pintaYears(from);

document.querySelector("#allGen").addEventListener("change", (e) => {
    if (e.target.checked) { //asi se marcan al marcarla, pero no se descarcan al desmarcarla
        document.querySelectorAll(".gfilter").forEach(c => {
            c.checked = true;
        });
    }
    // document.querySelectorAll(".gfilter").forEach (c => c.checked);  //asi hace como un toogle pero creo que era solo marcar, no descamarcar, la dejo por si acaso

})

//para que el año del "hasta" no empiece antes que el "desde";
from.addEventListener("change", ()=> {
    pintaYears(to, from.value);
    
})

//FUNCION PARA BUSCAR POR EL FILTRO DE CRITERIOS Y QUE SE SUMEN
const busquedaCritero = (criterio, busqueda, array) => {
    const news = pelis.filter(p => p[criterio]?.toLowerCase().includes(busqueda.toLowerCase()));
    const nuevos = news.filter(n => !array.some(b => b.imdbID === n.imdbID));
    array.push(...nuevos);

}
// BUSCAR!----------------------------------------------------------------------------
document.querySelector(".buscar").addEventListener("click", () => {
    const gfilters = document.querySelectorAll(".gfilter");
    resultados.innerHTML = "";
    cantidad.innerHTML = "0";
    let arrayLimitado = [...pelis];
    let selectFiltros = [];
    let generosFiltrados = [];

    //BARRA BUSQUEDA - PRIMEROS FILTROS
    if (barraBuscador.value) {
        arrayLimitado = [];
        bfilters.forEach(f => {
            if (f.checked) {
                selectFiltros.push(f.value);
            }
        });
        selectFiltros.forEach(criterio => {
            busquedaCritero(criterio, barraBuscador.value, arrayLimitado);
        })
    }
    // PAISES
    if (selectCountries.value != "all") {
        arrayLimitado = arrayLimitado.filter(p => p.Country.includes(selectCountries.value))
    }
    // FILTRO GENEROS 
    gfilters.forEach(f => {       
        if (f.checked) {
            arrayLimitado = arrayLimitado.filter(p => p.Genre.includes(f.value));
        }
    });

    //FILTRO AÑOS
if (from.value ){
    arrayLimitado.filter(p => from.value <= p.Year); 
}
if (to.value){
    arrayLimitado.filter(p => p.Year <= to.value); 
}

    //MOSTRAR RESULTADO
    arrayLimitado.forEach(p => {
        crearTarjeta(p);
        cantidad.textContent = arrayLimitado.length;
    });
});
// ------------------------------------------------------------------------------------
 // lo he puesto así porque en el examen no apunte el codigo para pasarlo, de modo que lo paso "manual" 
 // (quito la parte de las imagenes)
const mostrarDetalles = (e) => {
    const ficha = e.target.parentElement;
    if (ficha.querySelector(".mostrarDetalles")) {
        ficha.removeChild(ficha.lastElementChild);
    } else {
        const peli = pelis.find(p => p.imdbID == e.target.id);

        const divDetalles = document.createElement("div");
        divDetalles.classList.add("mostrarDetalles");
        ficha.appendChild(divDetalles);

        const divUpdateImdb = document.createElement("div");
        divUpdateImdb.classList.add("d-flex")
        divUpdateImdb.innerHTML = `
    <button class="btn btn-warning mx-1">Rate:</button>
    <p class="mx-1"><b>${peli.imdbRating}</b></p>
    <input class="form-control rating mx-3" name="rating" type="number" min="0" max="10" step="0.1" value="${peli.imdbRating}"></input>
    `;
        divDetalles.appendChild(divUpdateImdb);


        for (item in peli) {
            const p = document.createElement("p");
            p.innerHTML = `
            <b>${item}: </b>${peli[item]}
        `
            divDetalles.appendChild(p);
        }
        divDetalles.removeChild(divDetalles.lastElementChild);
        const updatedRating = divUpdateImdb.querySelector(".rating");

        divUpdateImdb.querySelector(".btn").addEventListener("click", () => {
            const indice = pelis.indexOf(peli);
            console.log(updatedRating.value);
            pelis[indice].imdbRating = updatedRating.value;
                    ficha.removeChild(ficha.lastElementChild);
            mostrarDetalles(e);
        })
    }
}



