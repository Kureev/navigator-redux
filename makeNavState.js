const Immutable = require('immutable');

module.exports = function makeInitialNavigationState(stack = [], index = 0) {
  return {
    __navRedux: {
      stack: new Immutable.Stack(stack),
      index: index,
    },
  };
};
