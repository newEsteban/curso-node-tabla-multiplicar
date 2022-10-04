const argv = require('yargs')
.options({
    'b' : {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 1,
        describe: 'Base para multiplicar'
    },
    'l' : {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    },
    'h' : {
        alias: 'hasta',
        type: 'number',
        default: 1,
        describe: 'Valor para determinar hasta donde queremos multiplicar'
    },
})
.check( (argv, options) => {

    if ( isNaN(argv.base) ) {
        throw 'La base de multiplicar debe ser un numero';
    }

    return true;

})
.argv;

module.exports = {argv};