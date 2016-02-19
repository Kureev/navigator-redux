
const {PUSH, POP, REPLACE, REPLACE_AT_INDEX, REPLACE_TO} = require('../constants/navigation');

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
  replaceAtIndex: function replaceAtIndex(route, index) {
    return {
      type: REPLACE_AT_INDEX,
      payload: {route, index},
    };
  },
  replaceTo: function replaceTo(route) {
    return {
      type: REPLACE_TO,
      payload: route,
    };
  },
};
