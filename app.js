//Requires
const { climaLtLn } = require('./clima/clima');
const { lugarLtLn } = require('./lugar/lugar');
//El método options es parecido al command, con la diferencia de que se simplifica el comando
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Dirección del lugar a solicitar'
        }
    })
    .argv;

//Funcion para dar el clima de la direccion
const info = async(direccion) => {
    try {
        const data = await lugarLtLn(direccion);

        //Variables para definir los parámetros
        const lat = data.lat;
        const lon = data.lon; //Respuesta del callback del lugar


        //Respuesta del callback del clima
        const data02 = await climaLtLn(lat, lon);

        //Return para la promesa
        return (`El clima de ${direccion} es de ${data02}`);
    } catch (err) {
        //Return para el error de la promesa
        return (`No se pudo determinar el Clima de ${direccion}`)
    }
}

//Respuesta de la promesa principal
info(argv.direccion)
    .then(file => console.log(file))
    .catch(err => console.log(err))