// 1) Manejo sincronico
const fs = require('fs');
const { json } = require('stream/consumers');

// const rutaSin = '.ejemplo-sin.txt';

// crear un archivo

// fs.writeFileSync(rutaSin, 'Hello world, i am Gena, my favorite color is red LABEL');

// Leer un archivo

// const contenido = fs.readFileSync(rutaSin, "utf-8");
// el primer parametro es el path, 
// el segundo es el tipo de codificacion

// console.log(contenido);

// Actualizar contenido
// fs.writeFileSync(rutaSin, 'actualizamos la pagina')

// agregar contenido al final
// fs.appendFileSync(rutaSin, ' Nuevo texto debajo del anterior');

//Borramos la ruta
// fs.unlinkSync(rutaSin)

// Trabajando con callbacks

// const conCAll = './ejemplo_call.txt'

// fs.writeFile(conCAll, 'New archive with callbacks', (error) =>{
//     if(error) return console.log('Ocurrio un error');
// });

// // Leemos el archivo

// fs.readFile(conCAll, 'utf-8', (error, contenido) => {
    
//     if(error) return console.log('No pudimos leer su archivo');
//     console.log(contenido);

// // agregar contenido

//     fs.appendFile(conCAll, ' Agregamos contenido al existente.', (error) =>{
//         if(error) return console.log('Ocurrio un error');
//     })
// // Eliminar contenido

//     fs.unlink(conCAll, (error) =>{
//         if(error) return console.log('no pudimos eliminar el archivo');
//     })
// })

//Trabanjo con  Promises

// propiedad promises modulo fs

// const textoPromises = './texto-pro.txt';

// const operacionesAsincronicas = async () =>{
//     //Crear un archivo
//     await fs.promises.writeFile(textoPromises, 'New file');

//     //Leer un archivo
//     let respuesta = await fs.promises.readFile(textoPromises, 'utf-8');
//     console.log(respuesta);

//     // Agregar contenido
//     await fs.promises.appendFile(textoPromises, 'New content');
//     // este texto se puede releer, para mostrarlo por consola.

//     // Eliminar el archivo
//     await fs.promises.unlink(textoPromises);
// }
// // No se olviden de invocar la función
// operacionesAsincronicas();

// Manejo de datos complejos

const arrayPersonas =  [
    {Nombre:'pepe', apellido:'argento', edad: 50},
    {Nombre:'Moni', apellido:'argento', edad: 30},
    {Nombre:'Paola', apellido:'argento', edad: 20},
    {Nombre:'Koki', apellido:'argento', edad: 20}
]

const archivoArgento = './archivoArgento.json';

//Guardar archivo 
const guardarArchivo = async () =>{
    await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersonas,null, 2))
}

guardarArchivo();

// leer archivo
// const leerArchivo = async () =>{
//     const respuesta = await fs.promises.readFile(archivoArgento,'utf-8');
//     const arrayNuevo = JSON.parse(respuesta);
//     console.log(arrayNuevo);
// }

// leerArchivo();
