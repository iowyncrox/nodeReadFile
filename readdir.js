"use strict";

var fs = require("fs");

// var file = fs.readdirSync("./js");

fs.readdir("./js", function(error, files) {
    if(error) {
        throw error;
    } else {
        console.log(files);
    }
})

// console.log(file);