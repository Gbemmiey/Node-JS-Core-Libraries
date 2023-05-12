// Punycode

/**
 *
 * Punycode is a special encoding syntax that is specifically
 * used to convert Unicode characters (UTF-8) to ASCII,
 * which is nothing but the restricted string character set.
 *
 *
 */

const punycode = require("punycode");

// Encode Unicode symbols to
// Punycode ASCII string
console.log(punycode.encode("máanama"));
console.log(punycode.encode("?-?"));
