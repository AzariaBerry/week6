const promiseTimeout = function(ms, promise){
let promiseA = new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
    clearTimout(wait);
    resolve('it works!');
    }, 1000)
});
}


function games(){
        document.getElementById("header").innerHTML = "Video Games"
}

setTimeout(() =>{
console.log(games())
},5000);