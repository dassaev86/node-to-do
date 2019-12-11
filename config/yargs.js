const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca una tarea como compleada o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea', {
        descripcion
    })

.help().argv;

module.exports = {
    argv
}