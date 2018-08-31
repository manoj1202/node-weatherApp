console.log("Starting App");


setTimeout(() =>{
    console.log("Inside SetTimeout")
}, 2000)

setTimeout(() =>{
    console.log("Second setTimeout worked")
},0)

console.log("Finished the App execution")