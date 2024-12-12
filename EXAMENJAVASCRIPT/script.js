const resultados = document.querySelector(".resultados");
const checkboxGenres = document.querySelector(".checkboxGenres");
const selectCountries = document.querySelector("#country");
const barraBuscador = document.querySelector(".barraBuscador");
const bfilters = document.querySelectorAll(".bfilter");
const cantidad = document.querySelector(".cantidad");
const from = document.querySelector(".from");
const to = document.querySelector(".to");



const crearTarjeta = (peli) => {
    const div = document.createElement("div");
    resultados.appendChild(div);
    div.innerHTML = `
       <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${peli.Title}</h5>
            <img src="${peli.Images[0]}"
            alt="imagen pelicula" style="width: 100px;">
            <button class="btn btn-secondary detalles" id="${peli.imdbID}">Details</button>
            <div class="gen${peli.imdbID}">
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
}
const pintaGeneros = () => {
    const arrayGenders = genders.sort((a, b) => a.localeCompare(b));
    arrayGenders.forEach(gen => {
        const div = document.createElement("div");
        div.classList.add("form-check", "me-3");

        div.innerHTML = `
        <div class="form-check me-3">
                    <input class="form-check-input" type="checkbox" id="${gen}" value="${gen}">
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

const pintaYears = (select) => {
    const today = new Date();
    for (let i=2000; i<=today.getFullYear(); i++) {
        const option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
}
const busquedaCritero = (criterio, busqueda, array) => {       
    const news = pelis.filter(p => p[criterio]?.toLowerCase().includes(busqueda.toLowerCase()));        
    const nuevos = news.filter(n => !array.some(b => b.imdbID === n.imdbID));
    array.push(...nuevos);
    
}

pintaGeneros();
pintaCountries();
pintaYears(to);
pintaYears(from);

document.querySelector(".buscar").addEventListener("click", () => {
    resultados.innerHTML="";
    cantidad.innerHTML="0";
    let arrayLimitado = [...pelis];
    let selectFiltros =  [];
    if (barraBuscador.value) {
        arrayLimitado = [];
        bfilters.forEach(f => {
            if (f.checked) {
                selectFiltros.push(f.value);
            }
        });
        console.log(selectFiltros);            
        selectFiltros.forEach(criterio => {
            console.log(criterio);                
            busquedaCritero(criterio, barraBuscador.value, arrayLimitado);
        })
    }

    if (selectCountries.value!="all"){
        
    }


    arrayLimitado.forEach(p => {
        crearTarjeta(p);
        cantidad.textContent=arrayLimitado.length;
    } );
});

// const mostrarDetalles = (event) => {
//     event.preventDefault();
//     // console.log(event.target.id);
//     console.log("hola");

// }

// document.querySelectorAll(".detalles").forEach(d => {
//     d.addEventListener("click", mostrarDetalles)
// });

