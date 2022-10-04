const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require( './config/yargs' );
const colors = require('colors');

console.clear();

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo( base, listar, hasta )
    .then(( nombreArchivo ) => console.log(nombreArchivo.rainbow, ' creado') )
    .catch((err) => console.log(err));



