// TLS Module

/***
 *
 * The TLS module provides a way of implementing TLS (Transport Layer Security) and SSL (Secure Socket Layer).
 *
 *
 */
var tls = require("tls");
var fs = require("fs");

var options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
  rejectUnauthorized: false,
};

var server = tls.createServer(options, function (socket) {
  socket.on("data", function (data) {
    console.log("\nReceived:" + data.toString());
  });
  server.close(() => {
    console.log("Server closed successfully");
  });
});

server.listen(5000, function () {
  console.log("Listening at port" + 5000);
});

var client = tls.connect(5000, options, function () {
  value = tls.rootCertificates;

  client.write(" rootCertificates : " + value[0]);

  client.end(() => {
    console.log("Client closed successfully");
  });
});
