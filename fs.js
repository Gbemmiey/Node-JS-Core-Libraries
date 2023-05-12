// File System Module

/**
 *  This provides a way of working with the computer's file system
 *
 */

var fs = require("fs");

fs.readFile("https.js", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
