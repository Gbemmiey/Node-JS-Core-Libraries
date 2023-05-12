/**
 * The Buffer Module provides a way for handling streams of binary data.
 *
 */

/**
 * Buffer.alloc(size, fill, encoding)
 *
 * @param
 * size - (required) size of the buffer
 * fill - (optional) value to fill the buffer with
 * encoding - (optional) specifies the encoding format
 *
 * @returns
 * None - a new buffer object of the specified size
 *
 */

var buffer = Buffer.alloc(15, "b");
console.log(buffer); // <Buffer 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62>
