//Requires
const axios = require('axios');

//Funcion para generar la información del lugar solicitado
const lugarLtLn = async(dir) => {
    //Variable para codificar el comando string compatible con el URL
    const encodeUrl = encodeURI(dir);

    //Funcion para crear una nueva instancia. Esto sirve para ingresar un header personalizado
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '5a139472c7msh46d701b0859675ep1976d5jsn2641a9a4f6d8' }
    });

    //Funcion para hacer una peticion por medio del async-await.
    const resp = await instance.get();

    //Error
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontró el lugar ${dir}`);
    }

    //Variables para la información del lugar
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    //Se debe retornar para que el Async-Await tenga una respuesta
    return ({
        direccion,
        lat,
        lon
    })
}

module.exports = {
    lugarLtLn
}