// Datagram Module

/**
 * This module provides a way of sending messages from
 * one computer to another,
 */

var dgram = require("dgram");
var s = dgram.createSocket("udp4");
s.on("message", function (msg, rinfo) {
  console.log("I got this message: " + msg.toString());
});
s.bind(8080);
