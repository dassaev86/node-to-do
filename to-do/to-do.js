const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) reject(err);
        else console.log(`Tarea agregada`)
    });
}

const cargarDB = () => {
    try {

        listadoToDo = require('../db/data.json');
    } catch (error) {
        listadoToDo = [];
    }
}

const crear = (description) => {
    cargarDB();
    let toDo = {
        description,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB();
    return toDo;
}

const getListado = () => {
    cargarDB();
    return listadoToDo
}

const actualizar = (description, completado = true) => {
    cargarDB();
    let index = listadoToDo.findIndex(tarea => tarea.description === description);
    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrarTarea = (description) => {
    cargarDB();
    let index = listadoToDo.findIndex(tarea => tarea.description === description);
    if (index >= 0) {
        listadoToDo.splice(index, 1);
        guardarDB();
        return 'Elemento Borrado';
    } else {
        return 'No se encontró el elemento';
    }

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrarTarea
}