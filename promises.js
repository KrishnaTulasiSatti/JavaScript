const result = new Promise(function(resolve,reject) {
    var age = 19;

    if(age >= 18) {
        resolve();
    }
    else {
        reject();
    }
})

result.then(function() {
    console.log("Eligible");
})
.catch(function() {
    console.log("Not Eligible");
})
