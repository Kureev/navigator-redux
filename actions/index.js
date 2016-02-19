const {PUSH, POP, REPLACE, RESET_TO} = require('../constants/navigation');

module.exports = {
  push: function push(route) {
    return {
      type: PUSH,
      payload: route,
    };
  },

  pop: function pop() {
    return {
      type: POP,
    };
  },

  replace: function replace(route) {
    return {
      type: REPLACE,
      payload: route,
    };
  },

  resetTo: function resetTo(route) {
    return {
      type: RESET_TO,
      payload: route,
    };
  },
};
