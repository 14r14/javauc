Java Auto Compiler CLI
=================

A powerful Java auto compiler.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://www.npmjs.com/package/javauc)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://www.npmjs.com/package/javauc)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g javauc
$ javauc [COMMAND]
running command...
$ javauc (--version)
y/1.0.0 win32-x64 node-v16.10.0
$ javauc --help [COMMAND]
USAGE
  $ javauc COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g javauc
$ javauc compile "C:/Users/test-user/Documents/java-folder"
Watching for changes in **C:\Users\rohan\Documents\Learning Java**
$ javauc --version
javauc/2.0.0 win32-x64 node-v16.13.1
$ javauc --help [COMMAND]
USAGE
  $ javauc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`javauc compile PATH`](#javauc-compile-java)
* [`javauc help [COMMAND]`](#javauc-help-command)

## `javauc compile PATH`

Watch given directory for changes and compile any time changes are detected.

```
USAGE
  $ javauc compile [PATH_TO_DIRECTORY]

ARGUMENTS
  PATH_TO_DIRECTORY  Directory to watch for changes.

DESCRIPTION
  Watch given directory for changes and automatically compile.

_See code: [dist/commands/compile.ts](https://github.com/rohan-ramakrishnan/javauc/blob/master/src/commands/compile.ts)_

## `javauc help [COMMAND]`

Display help for javauc.

```
USAGE
  $ javauc help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for javauc.
```
