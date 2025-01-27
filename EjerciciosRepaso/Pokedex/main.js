const buscar = document.querySelector('.buscar');
const respuesta = document.querySelector('.respuesta');

const busca = () => {
    const nombre = document.querySelector('.nombre').value;
    const ataque = document.querySelector('.ataque').value;
    const tipos = document.querySelectorAll('.tipo');
    const resultados= [];
    const nombreRes = nombreFilter(nombre);
    const ataqueRes = ataqueFilter(ataque);

    const marcados = [...tipos].filter(t => t.checked).map(t => t.value);
    if (marcados.length > 0) {
        for (tipo of marcados) {
            const result = tipoFilter(tipo);
            for (pokemon of result) {
                if (!resultados.includes(pokemon)) {
                    resultados.push(pokemon);
                }
            }
        }
    }
    if (nombreRes.length > 0) {
        nombreRes.forEach(pokemon => {
            if (!resultados.includes(pokemon)) {
                resultados.push(pokemon);
            }
        });
    }
    if (ataqueRes) {
        for (pokemon of ataqueRes) {
            if (!resultados.includes(pokemon)) {
                resultados.push(pokemon);
            }
        }
    }
    console.log(marcados);

    console.log(ataqueRes);
    console.log(nombreRes);
    console.log(resultados);

    // console.log(nombreFilter(nombre));
    // console.log(ataqueFilter(ataque));


    mostrarResultados(resultados);
}

const nombreFilter = (nombre) => {
    return [...poke].filter(p => p.name.english.toLowerCase() == nombre.toLowerCase());
}
const ataqueFilter = (ataque) => {
    const resultado = [];
    [...poke].filter(p => {
        for (ability of p.profile.ability) {
            if (ability[0].toLowerCase() == ataque.toLowerCase()) {
                resultado.push(p);
            }
        }
    });
    return resultado;
}

const tipoFilter = (tipo) => {
    const resultado = [];
    [...poke].filter(p => {
        for (t of p.type) {
            if (t.toLowerCase() == tipo.toLowerCase()) {
                resultado.push(p)
            }
        }
    })


    return resultado;
}

const mostrarResultados = (resultados) => {
    console.log(resultados);
    
    respuesta.innerHTML="";
    for (r of resultados) {
        const ficha = document.createElement('div');
        ficha.innerHTML = `
                    <div class="card" style="width: 18rem;">
                <img src="./images/thumbnails/${r.id}.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${r.name.english}</h5>
                  <p class="card-text">${r.description}.</p>
                    <div class="flex my-2 tipoFicha">
                    </div> 
                  <a href="#" class="btn btn-primary ataquer">Ataques</a>
                </div>
              </div>
        `
        const tipoFicha = ficha.querySelector('.tipoFicha');
        for (tipo of r.type) {
            const tipoPoke = document.createElement('div');
            tipoPoke.innerHTML = `
            <div class="badge text-bg-info ">${tipo}</div>
            `
            tipoFicha.appendChild(tipoPoke);
        }
        ficha.querySelector('.ataquer').addEventListener('click', () => {
            const ataques = document.createElement('div');
            for (atack of r.profile.ability) {
                const tipoAtaque = document.createElement('div');
                tipoAtaque.innerHTML = `
                <div class="badge text-bg-info ">${atack}</div>
                `
                ataques.appendChild(tipoAtaque);
                ataques.after(ataquer);
            }
        })
        respuesta.append(ficha);
    }
}


buscar.addEventListener('click', busca);