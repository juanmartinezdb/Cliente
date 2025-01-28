    function creaPeople(name = 'pepe', age = 20) {
        return {
            name,
            age
        }
    }
    let people = [creaPeople('Jose'),
    creaPeople('Rodrigo',17),
    creaPeople('Eva',12),
    creaPeople('Rocio'),
    creaPeople('Marisa',31),
    creaPeople('Miguel',45),
    creaPeople('Jorge',15),
    creaPeople('Gregorio',17),
    creaPeople('Hans',21),
    creaPeople(),
    ]
    people.forEach(persona => {
        if (persona.age>=18){
            console.log(persona.name);
        }
    });
