const { PUSH, POP, REPLACE } = require('../constants/navigation');

module.exports = {
  push: function push(component) {
    return {
      type: PUSH,
      payload: component,
    };
  },

  pop: function pop() {
    return {
      type: POP,
    };
  },

  replace: function replace(component) {
    return {
      type: REPLACE,
      payload: component,
    };
  },
};
