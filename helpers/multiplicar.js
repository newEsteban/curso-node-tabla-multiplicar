const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 1 ) => {  
    try {
        
        console.log('=========================='.green);
        console.log('=== Tabla del: '.green + colors.blue( base ) + ' ==='.green);
        console.log('=========================='.green);
    
        let salida, consola = '';

        if (listar) {
            for (let index = 1; index <= hasta; index++) {
                consola += `${base} ${ 'x'.green } ${index} ${ '='.green } ${base * index}\n`;
                salida += `${base} x ${index} = ${base * index}\n`;
            }
        }

        console.log(consola);
        
        fs.writeFileSync(`salida/Tabla_del_${base}.txt`, salida);

        return `Tabla_del_${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}