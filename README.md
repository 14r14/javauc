Java Auto Compiler CLI
=================

A powerful Java auto compiler.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/javauc)](https://npmjs.com/package/javauc)
[![Downloads/week](https://img.shields.io/npm/dw/javauc)](https://www.npmjs.com/package/javauc)

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
javauc/2.1.0 win32-x64 node-v16.10.0
$ javauc --help [COMMAND]
USAGE
  $ javauc COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g javauc
$ javauc COMMAND
running command...
$ javauc (--version)
javauc/2.1.0 win32-x64 node-v16.10.0
$ javauc --help [COMMAND]
USAGE
  $ javauc COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g javauc
$ javauc compile "C:/Users/test-user/Documents/java-folder"
Watching for changes in **C:/Users/test-user/Documents/java-folder**
$ javauc --help [COMMAND]
USAGE
  $ javauc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`javauc compile [FOLDER]`](#javauc-compile-folder)
* [`javauc create-source-file [FOLDER] [FILENAME]`](#javauc-create-source-file-folder-filename)
* [`javauc help [COMMAND]`](#javauc-help-command)
* [`javauc plugins`](#javauc-plugins)
* [`javauc plugins:install PLUGIN...`](#javauc-pluginsinstall-plugin)
* [`javauc plugins:inspect PLUGIN...`](#javauc-pluginsinspect-plugin)
* [`javauc plugins:install PLUGIN...`](#javauc-pluginsinstall-plugin-1)
* [`javauc plugins:link PLUGIN`](#javauc-pluginslink-plugin)
* [`javauc plugins:uninstall PLUGIN...`](#javauc-pluginsuninstall-plugin)
* [`javauc plugins:uninstall PLUGIN...`](#javauc-pluginsuninstall-plugin-1)
* [`javauc plugins:uninstall PLUGIN...`](#javauc-pluginsuninstall-plugin-2)
* [`javauc plugins update`](#javauc-plugins-update)

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

_See code: [dist/commands/compile.ts](https://github.com/rohan-ramakrishnan/javauc/blob/v2.1.0/dist/commands/compile.ts)_

## `javauc create-source-file [FOLDER] [FILENAME(S)]`

creates a java source file

**You can also create multiple source files by passing multiple file names as a comma separated list in double quotes to the FILENAME argument.**

```
USAGE
  $ javauc create-source-file [FOLDER] [FILENAME(S)] [-c]

FLAGS
  -c, --includeConstructor

DESCRIPTION
  creates a java source file

EXAMPLES
  $ javauc create-source-file
```

_See code: [dist/commands/create-source-file.ts](https://github.com/rohan-ramakrishnan/javauc/blob/v2.1.0/dist/commands/create-source-file.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `javauc plugins`

List installed plugins.

```
USAGE
  $ javauc plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ javauc plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `javauc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ javauc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ javauc plugins add

EXAMPLES
  $ javauc plugins:install myplugin 

  $ javauc plugins:install https://github.com/someuser/someplugin

  $ javauc plugins:install someuser/someplugin
```

## `javauc plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ javauc plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ javauc plugins:inspect myplugin
```

## `javauc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ javauc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ javauc plugins add

EXAMPLES
  $ javauc plugins:install myplugin 

  $ javauc plugins:install https://github.com/someuser/someplugin

  $ javauc plugins:install someuser/someplugin
```

## `javauc plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ javauc plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ javauc plugins:link myplugin
```

## `javauc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ javauc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ javauc plugins unlink
  $ javauc plugins remove
```

## `javauc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ javauc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ javauc plugins unlink
  $ javauc plugins remove
```

## `javauc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ javauc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ javauc plugins unlink
  $ javauc plugins remove
```

## `javauc plugins update`

Update installed plugins.

```
USAGE
  $ javauc plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`javauc compile [FOLDER]`](#javauc-compile-folder)
* [`javauc create-source-file [FOLDER] [FILENAME]`](#javauc-create-source-file-folder-filename)
* [`javauc help [COMMAND]`](#javauc-help-command)
* [`javauc plugins`](#javauc-plugins)
* [`javauc plugins:install PLUGIN...`](#javauc-pluginsinstall-plugin)
* [`javauc plugins:inspect PLUGIN...`](#javauc-pluginsinspect-plugin)
* [`javauc plugins:install PLUGIN...`](#javauc-pluginsinstall-plugin-1)
* [`javauc plugins:link PLUGIN`](#javauc-pluginslink-plugin)
* [`javauc plugins:uninstall PLUGIN...`](#javauc-pluginsuninstall-plugin)
* [`javauc plugins:uninstall PLUGIN...`](#javauc-pluginsuninstall-plugin-1)
* [`javauc plugins:uninstall PLUGIN...`](#javauc-pluginsuninstall-plugin-2)
* [`javauc plugins update`](#javauc-plugins-update)

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

_See code: [dist/commands/compile.ts](https://github.com/rohan-ramakrishnan/javauc/blob/v2.1.0/dist/commands/compile.ts)_

## `javauc create-source-file [FOLDER] [FILENAME]`

creates a java source file

```
USAGE
  $ javauc create-source-file [FOLDER] [FILENAME] [-c]

FLAGS
  -c, --includeConstructor

DESCRIPTION
  creates a java source file

EXAMPLES
  $ javauc create-source-file "C:/Users/test-user/Documents/java-folder" TestingJavauc [-c]
```

### `javauc create-source-file [FOLDER] "[MULTIPLE COMMA-DELIMITED FILENAMES]"`

creates multiple java source files. Quotes around comma-delimited list are required.

```
USAGE
  $ javauc create-source-file [FOLDER] "[COMMA-DELIMITED FILENAMES]" [-c]

FLAGS
  -c, --includeConstructor

DESCRIPTION
  creates multiple java source files

EXAMPLES
  $ javauc create-source-file "C:/Users/test-user/Documents/java-folder" "TestingJavauc,JavaucTest" [-c]

_See code: [dist/commands/create-source-file.ts](https://github.com/rohan-ramakrishnan/javauc/blob/v2.1.0/dist/commands/create-source-file.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `javauc plugins`

List installed plugins.

```
USAGE
  $ javauc plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ javauc plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `javauc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ javauc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ javauc plugins add

EXAMPLES
  $ javauc plugins:install myplugin 

  $ javauc plugins:install https://github.com/someuser/someplugin

  $ javauc plugins:install someuser/someplugin
```

## `javauc plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ javauc plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ javauc plugins:inspect myplugin
```

## `javauc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ javauc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ javauc plugins add

EXAMPLES
  $ javauc plugins:install myplugin 

  $ javauc plugins:install https://github.com/someuser/someplugin

  $ javauc plugins:install someuser/someplugin
```

## `javauc plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ javauc plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ javauc plugins:link myplugin
```

## `javauc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ javauc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ javauc plugins unlink
  $ javauc plugins remove
```

## `javauc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ javauc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ javauc plugins unlink
  $ javauc plugins remove
```

## `javauc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ javauc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ javauc plugins unlink
  $ javauc plugins remove
```

## `javauc plugins update`

Update installed plugins.

```
USAGE
  $ javauc plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
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
