// Domain Module

/**
 *
 * This is used to intercept unhandled error.
 * These unhandled error can be intercepted using
 * internal binding or external binding.
 * If errors are not handled at all,
 * then they will simply crash the Node application.
 *
 */

var domain = require("domain");
var child = domain.create();
