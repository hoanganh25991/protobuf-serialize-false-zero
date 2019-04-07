# moleculer-zero-and-false-bug

## Test Protobuf serialize

+ Run "greeter" service

```sh
node node_modules/.bin/moleculer-runner --repl service.js
```

+ `On different terminal` run "debug" service

```sh
node node_modules/.bin/moleculer-runner --repl debug.js
```

+ Test Protobuf serialize by call action "greeter.willReturnFalse"

```sh
$mol call "greeter.willReturnFalse"
```
