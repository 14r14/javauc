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
$ javauc COMMAND
running command...
$ javauc (--version)
javauc/2.0.0 win32-x64 node-v16.10.0
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
* [`javauc compile [FOLDER]`](#javauc-compile-folder)
* [`javauc hello PERSON`](#javauc-hello-person)
* [`javauc hello world`](#javauc-hello-world)
* [`javauc help [COMMAND]`](#javauc-help-command)

## `javauc compile [FOLDER]`

automatically compiles java files at given path

```
USAGE
  $ javauc compile [FOLDER]

DESCRIPTION
  automatically compiles java files at given path

EXAMPLES
  $ javauc compile "C:/Users/test-user/Documents/java-folder"
```

_See code: [dist/commands/compile.ts](https://github.com/rohan-ramakrishnan/javauc/blob/v2.0.0/dist/commands/compile.ts)_

## `javauc hello PERSON`

Watch given directory for changes and compile any time changes are detected.

```
USAGE
  $ javauc compile [PATH_TO_DIRECTORY]

ARGUMENTS
  PATH_TO_DIRECTORY  Directory to watch for changes.

DESCRIPTION
  Watch given directory for changes and automatically compile.

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/rohan-ramakrishnan/javauc/blob/v2.0.0/dist/commands/hello/index.ts)_

## `javauc hello world`

Say hello world

```
USAGE
  $ javauc hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

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
