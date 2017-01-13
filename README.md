# angular-stub-changes

A stub implementation of the `$onChanges` changes object for easier testing.

```javascript
var StubChanges = require('angular-stub-changes');

var changes = new StubChanges().addInitialChange('foo', 123).addChange('baz', 'aaa', 'bbb').build();

changes.foo.isFirstChange(); // <- true
changes.baz.isFirstChange(); // <- false

changes.foo.currentValue; // <- 123

changes.baz.currentValue;  // <- 'aaa'
changes.baz.previousValue; // <- 'bbb'
```

## Installation

```bash
npm install --save-dev angular-stub-changes
```
