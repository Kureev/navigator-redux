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
        stack: stack.push(payload),
        index: 0,
      });

    case POP:
      if (stack.count() === 1) {
        return state;
      }

      return Object.assign({}, state, {
        stack: stack.shift(),
        index: 0,
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
