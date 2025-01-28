function sendEmail(name, age, comments, email){
    if (arguments.length<4){
        return null;
    }
    const status = age >= 18 ? `${name} is a valid user` : `${name} is not a valid user`;

    const cadena = `
    A user has posted a comment from the website:
    name: ${name}
    age: ${age}
    status: ${status} (${email})
    comments: ${comments}
    `;
    return cadena;
}
console.log(sendEmail("Pepe", 27, "ola k ase!", "pepe@gmail.com"));
