const Immutable = require('immutable');

module.exports = function makeNavState(stack = [], index = 0) {
  return {
    __nav: {
      stack: new Immutable.Stack(stack),
      index: index,
    },
  };
};
