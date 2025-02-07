# Fixes

## (node:15416) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.

(Use `node --trace-deprecation ...` to show where the warning was created)

See here the solution:

```
$ npm install module-alias
```

Then in your code:

```
const moduleAlias=require('module-alias')
moduleAlias.addAlias('punyCode', 'punyCode/')
```
