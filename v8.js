// V8 Module

/***
 *
 * The node:v8 module exposes APIs that are specific
 * to the version of V8 built into the Node.js binary.
 *
 *
 */

// Print heap snapshot to the console
const v8 = require("node:v8");
const stream = v8.getHeapSnapshot();
stream.pipe(process.stdout);
