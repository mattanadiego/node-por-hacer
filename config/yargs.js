const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea Por Hacer'
    },

    const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completada o pendiente una tarea Por Hacer'
    }

const argv = require('yargs')
    .command('crear', 'Crea una tarea Por Hacer', {
        descripcion
    })
    .command('listar', 'Lista todas las tareas Por Hacer')
    .command('actualizar', 'Actualiza a completada o pendiente una tarea Por Hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea Por Hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}