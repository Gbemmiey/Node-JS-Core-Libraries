/**
 * The Assert Module
 *
 *
 * The assert module provides a way of testing expressions.
 * If the expression evaluates to 0, or false, an assertion failure is being caused,
 * and the program is terminated.
 *
 * To include the assert module in an application:
 * var assert = require('assert');
 *
 * Example
 */

var assert = require("assert");
/**
 * assert(expression, message)
 *
 * @param
 * expression - A required expression to be evaluated
 * message - An optionalerror message to be assigned to the AssertionError
 *
 * @returns
 * None - an error if the expression evaluates to 0 or false
 *
 */

let output = assert(500 === 70, "Unequal Values"); //Test of a given expression is true or false
console.log(output); // Throw an AssertionError
