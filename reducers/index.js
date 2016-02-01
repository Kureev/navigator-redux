const {PUSH, POP, REPLACE} = require('../constants/navigation');

module.exports = function navigate(state, {type, payload}) {
  const stack = state.__nav.stack;
  const index = state.__nav.index;

  switch (type) {
    case PUSH:
      return Object.assign({}, state, {
        __nav: {
          stack: stack.unshift(payload),
          index: 0,
        },
      });

    case POP:
      const incremented = index + 1;

      if (incremented === stack.count()) {
        return state;
      }

      return Object.assign({}, state, {
        __nav: {
          stack: stack,
          index: incremented,
        },
      });

    case REPLACE:
      if (!stack.count()) {
        return state;
      }

      return Object.assign({}, state, {
        __nav: {
          stack: stack.splice(index, 1, payload),
          index: index,
        },
      });

    default:
      return state;
  }
};
