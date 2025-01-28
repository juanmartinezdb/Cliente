const students = [
    'Perico Palotes',
    'Ronald McDonalds Sanchez',
    'Sergio Entrena',
    'Kimi Barroso Rivas',
    'Elena Martinez Alarcos',
    'Mengano Menguez'
]

let sortStudent = (students) => students.sort((a, b)=> a.split(" ")[1]
                                .localeCompare(b.split(" ")[1]));

    console.log(students);
    console.log(sortStudent(students));
