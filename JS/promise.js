

const myPromise = new Promise((resolve, reject)=> {
    console.log("executed promise");
    // resolve("Success");
    // reject(Network error);
}).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
})