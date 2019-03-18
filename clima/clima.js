//Requires
const axios = require('axios');

//Funcion para obtener el clima
const climaLtLn = async(lat, lon) => {
    //URL de openweathermap.org que es un API del clima
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2fcd4630d6b9de7fc64878909266b89&units=metric`);

    return resp.data.main.temp;

}

//Exports
module.exports = {
    climaLtLn
}