'use strict';

function ChangesStub() {
  var self = this;
  var changes = {};

  self.addInitialChange = function(name, value) {
    return change(name, value, undefined, true);
  };

  self.addChange = function(name, value, oldValue) {
    return change(name, value, oldValue, false);
  }

  self.build = function() {
    return changes;
  };

  function change(name, value, oldValue, isFirst) {
    changes[name] = {
      currentValue: value,
      previousValue: oldValue,
      isFirstChange: function() { return isFirst; }
    };

    return self;
  }
}

module.exports = ChangesStub;
