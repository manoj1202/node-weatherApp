const yargs = require("yargs")
const axios = require("axios")

const argv = yargs
        .options({
            a:{
                demand : true,
                alias : "address",
                describe : 'Address to fetch weather',
                stirng : true
            }
        })
        .help()
        .alias("help", "h")
        .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === "ZERO_RESULTS"){
        throw new Error("Unable to find that address")
    }

    var lat = response.data.results[0].geometry.location.lat ;
    var lng = response.data.results[0].geometry.location.lng ;
    var weatherUrl = `https://api.darksky.net/forecast/196d75bb69939a5154f43d94f2745f51/${lat},${lng}`
    console.log(response.data.results[0].formatted_address)

    return axios.get(weatherUrl)

}).then ((response) =>{
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);

}).catch((e) =>{
    if(e.code === "ENOTFOUND"){
        console.log("Unable to connect API server")
    }else{
        console.log(e.message)
    }
})