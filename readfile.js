"use strict";

var fs = require("fs");

// var File = fs.readFileSync("./js/Employee.js", "utf8");

// console.log(File);

fs.readFile("./js/Employee.js", "utf8", function(error, data) {
    if(error) {
        throw error;
    } else {
        console.log(data);
    }
});