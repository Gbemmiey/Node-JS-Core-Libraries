/**
 * The Child Processes Module
 *
 *
 * The child_process module enables us to access
 * operating system functionalities by running any
 * system command inside a child process.
 *
 */

/**
 *
 * spawn()
 * @param(command, args, options)
 *  command: <string> - The command to run
 *  args: <string[]> - List of string arguments
 *  options: <Object> - Options such as
 *                          cwd, env, detached, serialization, shell,
 *                          uid, gid, stdio, killSignal, timeout, etc.
 *
 *
 * @returns
 *  <ChildProcess>
 *
 */
const { spawn } = require("child_process");

const child = spawn("pwd");
