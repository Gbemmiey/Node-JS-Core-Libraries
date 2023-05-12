/**
 * The Cluster Module
 *
 * This provides a way of creating child processes that
 * runs simultaneously and share the same server port
 *
 */

var cluster = require("cluster");
if (cluster.isWorker) {
  console.log("I am a worker");
} else {
  console.log("I am a master");
  cluster.fork();
}
