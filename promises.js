const promiseTimeout = function(ms, promise){
let promiseA = new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
    clearTimeout(wait);
    resolve('it works!');
    }, 1000)
});
}

//connects to index.html
function games(){
        document.getElementById("header").innerHTML = "Video Games"
}

setTimeout(() =>{
console.log(games())
},5000);