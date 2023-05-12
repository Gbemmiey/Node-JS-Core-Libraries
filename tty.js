// TTY Module

/**
 *
 * The Node.js TTY module contains tty.ReadStream and tty.WriteStream classes.
 *
 */

var tty = require("tty");
process.stdin.setRawMode(true);
process.stdin.resume();
console.log("I am leaving now");
process.stdin.on("keypress", function (char, key) {
  if (key && key.ctrl && key.name == "c") {
    process.exit();
  }
});
