const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');
//let comando = argv._[0];

let comando = argv._[0];

console.log('ComandO: ', comando);

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('====== To Do ========'.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completado);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = toDo.borrarTarea(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');

}