// ZLib Module

/***
 *
 * The Zlib module provides a way of zip and unzip files.
 *
 */
var zlib = require("zlib");
var fs = require("fs");

var gzip = zlib.createGzip();
var r = fs.createReadStream("./demofile.txt");
var w = fs.createWriteStream("./mygzipfile.txt.gz");
r.pipe(gzip).pipe(w);
