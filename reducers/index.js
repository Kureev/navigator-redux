const {PUSH, POP, REPLACE} = require('../constants/navigation');

module.exports = function navigate(state, {type, payload}) {
  if (!state) {
    return {};
  }

  const stack = state.stack;
  const index = state.index;

  switch (type) {
    case PUSH:
      return Object.assign({}, state, {
        stack: stack.unshift(payload),
        index: 0,
      });

    case POP:
      const incremented = index + 1;

      if (incremented === stack.count()) {
        return state;
      }

      return Object.assign({}, state, {
        stack: stack,
        index: incremented,
      });

    case REPLACE:
      if (!stack.count()) {
        return state;
      }

      return Object.assign({}, state, {
        stack: stack.splice(index, 1, payload),
        index: index,
      });

    default:
      return state;
  }
};
