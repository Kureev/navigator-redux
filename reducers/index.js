const {PUSH, POP, REPLACE} = require('../constants/navigation');

module.exports = function navigate(state, {type, payload}) {
  if (!state) {
    return {};
  }

  const stack = state.__navRedux.stack;
  const index = state.__navRedux.index;

  switch (type) {
    case PUSH:
      return Object.assign({}, state, {
        __navRedux: {
          stack: stack.push(payload),
          index: index+1,
        }
      });

    case POP:
      if(stack.size === 1) {
        return state;
      }

      return Object.assign({}, state, {
        __navRedux: {
          stack: stack.pop(),
          index: index-1,
        }
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
