const request = require("request")

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject) =>{
        const encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json :true
        }, (error, response, body) =>{
            //console.log(JSON.stringify(body,undefined, 2));
            if(error){
                reject("Unable to connect to Google services")
            }else if(body.status === "ZERO_RESULTS"){
                reject("Unable to find that address")
            }else if(body.status === "OK"){
                resolve({
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                })
            }
        });
    });
};

geocodeAddress('66223').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2))
}).catch((errorMessage) =>{
    console.log(errorMessage)
})