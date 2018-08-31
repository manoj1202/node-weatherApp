const request = require("request");

let getWeather = (lat, lng, callback) =>{
    request({
        url : `https://api.darksky.net/forecast/196d75bb69939a5154f43d94f2745f51/${lat},${lng}`,
        json : true
    },(error,response,body) =>{
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            })
        }else
        callback("Unable to connect to Server")
    })
}


module.exports.getWeather = getWeather;