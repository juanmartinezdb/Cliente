let stringParametrize = ((cadena) => cadena.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-') );

console.log(stringParametrize('El Perro de San Roque no tiene Rabo'));