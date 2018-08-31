var asyncAdd = (a, b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof a === "number", typeof b === "number"){
                resolve(a+b)
            }else {
                reject("Arguments must be numbers")
            }
        },1500)
    })
}

asyncAdd(5, 7).then((res) =>{
 console.log("result : ", res)
 return asyncAdd(res, 33)
}).then((res) =>{
    console.log("Result 2 is 45 : ", res)
}).catch((errorMessage) =>{
    console.log(errorMessage)
})

// var somePromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         //resolve("Hey. It Worked")
//         reject("Unable to fulfill request")
//     }, 2500)
// })

// somePromise.then((message) =>{
//     console.log("Success : ", message)
// },(errorMessage) =>{
//     console.log("Error:", errorMessage)
// })