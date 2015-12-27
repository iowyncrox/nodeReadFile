"use strict";

var fs = require("fs");
var path = require("path");

fs.readdir("./js", function (error, files) {

    files.forEach(function (file) {
        var file = path.join(__dirname + "/js/" + file);
        var stats = fs.statSync(file);
        if (stats.isFile()) {
            fs.readFile(file, "utf8", function (error, content) {
                console.log(content);
            });
        }
    });
});