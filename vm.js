// VM Module

/****
 *
 * The VM module provides a way of executing JavaScript on a virtual machine,
 * almost like eval() in JavaScript.
 *
 *
 */

var vm = require("vm");
var myObj = { name: "John", age: 38 };
vm.createContext(myObj);

vm.runInContext("age += 1;", myObj);

console.log(myObj);
