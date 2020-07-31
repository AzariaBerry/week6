//first require the http module
const http = require("http");
const fs = require('fs');
const path = require('path');
// the port being used
const port = 3474;
const hostname = 'about';

http.createServer(function (request, response) {
    console.log('request ', request.url);

    console.log(`Request to server for ${req.url}`);
    // if request to about is given go to about.html
    filePath = '.' + req.url;
    if (filePath == './about') {
        filePath = './about.html';

    }

}).listen(port);
// server port for the localhost
console.log(`Server running at localhost:${port}`);
