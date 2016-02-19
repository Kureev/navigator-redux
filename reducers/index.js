import invariant from 'invariant';
const {PUSH, POP, REPLACE, RESET_TO} = require('../constants/navigation');

module.exports = function navigate(state, {type, payload}) {
  if (!state) {
    return {};
  }

  let stack = state.stack;
  let index = state.index;

  switch (type) {
    case PUSH:
      if (index !== 0) {
        stack = stack.skip(index);
      }

      return Object.assign({}, state, {
        stack: stack.push(payload),
        index: 0,
      });

    case POP:
      if (stack.count() === 1) {
        return state;
      }

      return Object.assign({}, state, {
        index: index + 1,
      });

    case REPLACE:
      if (!stack.count()) {
        return state;
      }

      return Object.assign({}, state, {
        stack: stack.splice(index, 1, payload),
      });

    case RESET_TO:
      return Object.assign({}, state, {
        stack: stack.clear().push(payload),
        index: 0,
      });

    default:
      return state;
  }
};
