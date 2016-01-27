export default function navigate(state, action) {
  const stack = state.__nav.stack;
  const index = state.__nav.index;

  switch (action.type) {
    case 'PUSH':
      return Object.assign({}, state, {
        __nav: {
          stack: stack.unshift(action.payload),
          index: 0,
        },
      });

    case 'POP':
      if (index === stack.count()) {
        return state;
      }

      return Object.assign({}, state, {
        __nav: {
          stack: stack,
          index: index + 1,
        },
      });

    case 'REPLACE':
      return Object.assign({}, state, {
        __nav: {
          stack: stack.splice(index, 1, action.payload),
        },
      });

    default:
      return state;
  }
}
