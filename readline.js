// Readline Module

/**
 *
 * The Readline module provides a way of reading a datastream,
 *  one line at a time.
 *
 */

var readline = require("readline");
var fs = require("fs");

var myInterface = readline.createInterface({
  input: fs.createReadStream("os.js"),
});

var lineno = 0;
myInterface.on("line", function (line) {
  lineno++;
  console.log("Line number " + lineno + ": " + line);
});
