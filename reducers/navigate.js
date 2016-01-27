export default function navigate(state, action) {
  switch (action.type) {
    case 'PUSH':
      return Object.assign({}, state, {
        __nav: state.__nav.unshift(action.payload),
      });

    case 'POP':
      return Object.assign({}, state, {
        __nav: state.__nav.shift(),
      });

    default:
      return state;
  }
}
