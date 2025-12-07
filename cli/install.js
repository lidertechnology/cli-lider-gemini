
const fs    = require('fs-extra');
const path  = require('path');

const directorioOrigen  = '.gemini';
const directorioDestino = '.gemini-templates';

const rutaOrigen = path.join(__dirname, directorioOrigen);
const rutaDestino = path.join(process.cwd(), directorioDestino);

function instalarConfiguracion() {
    console.log('Inicilizando la configuracion de Gemini Lider');
    if(fs.existsSync(rutaDestino)) {
        console.log('El directorio {$directorioDestino} ya existe. La configuracion de Gemini no se sobreescribio para proteger los archivos locales');
    } else {
        try { fs.copySync(rutaOrigen, rutaDestino); 
            console.log('Gemini Lider configurado correctamente');
            console.log('El archivo Gemini.md fue cread con la instruccion para leer las convenciones de lidertech');
        }
        catch (error) { console.log('Error al copiar el directorio', error); }

        console.log('Gemini Lider configurado correctamente para usar las convenciones Lidetech');

       
    }
}