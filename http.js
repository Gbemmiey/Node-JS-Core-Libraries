// HTTP Module

/**
 * The HTTP module provides a way of making Node.js transfer
 * data over HTTP (Hyper Text Transfer Protocol).
 */

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
