// DNS Module

/**
 * This module provides a way of performing name resolutions
 */

var dns = require("dns");
var w3 = dns.lookup("w3schools.com", function (err, addresses, family) {
  console.log(addresses);
});
