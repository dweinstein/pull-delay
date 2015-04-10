# SYNOPSIS

A through stream that delays the input by a rate.

# USAGE

```javascript
var delay = require('pull-delay');
var pull = require('pull-stream');

pull(
  pull.values([1,2,3,4,5]),
  delay(5000),
  pull.through(console.log),
  pull.drain()
);
```

