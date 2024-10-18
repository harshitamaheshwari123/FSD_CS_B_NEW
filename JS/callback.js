function register(cb) {
    console.log("Register End");
    cb();
}

function login(cb) {
 setTimeout(() => {
   console.log("Login");
 }, 3000);
    cb();
    
}

function display() {
  setTimeout(() => {
    console.log("Display User data");
  }, 3000);
}

// function waitfor() {
//     const ns = 5000 + new Date().getTime();
//     while(ns>new Date())
//   console.log("Waiting");
// }

// waitfor();
register(function () {
    login(function () {
        display();
    });
 
});


// differenciate between map and flatmap
