//first require the http module
const http = require("http");
const fs = require('fs');
const path = require('path');
const url = require("url");
const { extname } = require("path");
// the port being used
const port = 3742;


http.createServer(function (request, response) {

    let page = url.parse(req.url, true);   
    let file = `.${page.pathname}`;
    // if request to about is given go to about.html if not go to index.html
    filePath = '.' + req.url;
    if (file == "./") {
        file = "./index.html"; 
    }
    else if (file == "./about") {
        file = "./about.html";
    }
    console.log(`Request to server for ${req.url}`);
    let extname = page.pathname.substring(page.pathname.indexOf('.')).toLowerCase();

}).listen(port);
// server port for the localhost
console.log(`Server running at localhost:${port}`);
