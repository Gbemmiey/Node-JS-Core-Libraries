// Events Module

/**
 * It is a way of working with events.
 * All dvents are an instance of the EventEmitter object in Node.js
 */

var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("scream", function () {
  console.log("A scream is detected!");
});
eventEmitter.emit("scream");
