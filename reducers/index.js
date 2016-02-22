
import invariant from 'invariant';
const {
  PUSH,
  POP,
  REPLACE,
  RESET_TO,
  REPLACE_AT_INDEX,
  REPLACE_PREVIOUS,
  IMMEDIATELY_RESET_ROUTE_STACK,
} = require('../constants/navigation');

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

    case REPLACE_PREVIOUS:
      invariant(
        stack.count() > index + 1,
        'There is no previous scene in the stack ' +
        'at the current index: ' + index,
      );

      return Object.assign({}, state, {
        stack: stack.splice(index + 1, 1, payload),
      });

    case IMMEDIATELY_RESET_ROUTE_STACK:
      invariant(
        payload && payload.length >= 1,
        'Make sure to pass an array of routes with at least one route.'
      );

      return Object.assign({}, state, {
        stack: state.stack.clear().pushAll(payload),
        index: 0,
      });

    default:
      return state;
  }
};
