
import invariant from 'invariant';
const {PUSH, POP, REPLACE, REPLACE_AT_INDEX} = require('../constants/navigation');

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

    case REPLACE_AT_INDEX:
      invariant(
        payload.index < stack.count() - 1 && payload.index > 0,
        'Index out of bounds when trying to replaceAtIndex: ' +
        'your navigation stack contains ' + stack.count() + ' elements, ' +
        'but you\'re trying to replace an element with index ' + payload.index,
      );

      return Object.assign({}, state, {
        stack: stack.splice(payload.index, 1, payload.route),
      });

    default:
      return state;
  }
};
