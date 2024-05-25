// classe

class Profesor {
    constructor(nombre, edad, materia, experienxia, departamento) {
        this.nombre = nombre;
        this.edad = edad;
        this.materia = materia;
        this.experienxia = experienxia;
        this.departamento = departamento;
    }
    // ` `
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Materia: ${this.materia}`);
        console.log(`Experienci: ${this.experienxia}`);
        console.log(`Departamento: ${this.departamento}`);
    }

    actualizarExperiencia(nuevaExperiencia) {
        this.experiencia = nuevaExperiencia;
    }
    cambiarMateria(nuevaMateria) {
        this.materia = nuevaMateria;
    }

    static compararExperiencia(profesor1, profesor2) {
        if (profesor1.experiencia > profesor2.experiencia) {
            console.log(`${profesor1.nombre} tiene mas experiencia que el  ${profesor2.nombre}`)
        }else if (profesor1.experiencia < profesor2.experiencia) {
            console.log(`${profesor2.nombre} tiene mas experiencia que el ${profesor1.nombre} `)
        } else {
            console.log(`${profesor1.nombre} y ${profesor2.nombre} `)
        }
    }
}


let profesor1 = new Profesor('Laura Garcia', 45, 'Matematicas', 20, 'Ciencias Exactas');
let profesor2 = new Profesor('Carlos Perez', 50, 'Fisica', 25, 'Ciencias Exactas');

profesor1.mostrarInformacion();
profesor2.mostrarInformacion();

profesor1.actualizarExperiencia(22);
profesor2.cambiarMateria('Estadisticas');

console.log('Informacion actualizada de el profesor1');
profesor1.mostrarInformacion();

Profesor.compararExperiencia(profesor1, profesor2); 