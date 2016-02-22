const {
  PUSH,
  POP,
  REPLACE,
  RESET_TO,
  REPLACE_AT_INDEX,
  REPLACE_PREVIOUS,
  IMMEDIATELY_RESET_ROUTE_STACK,
} = require('../constants/navigation');

module.exports = {
  push: function push(route) {
    return {
      type: PUSH,
      payload: route,
    };
  },

  pop: function pop() {
    return {
      type: POP,
    };
  },

  replace: function replace(route) {
    return {
      type: REPLACE,
      payload: route,
    };
  },
  resetTo: function resetTo(route) {
    return {
      type: RESET_TO,
      payload: route,
    };
  },
  replaceAtIndex: function replaceAtIndex(route, index) {
    return {
      type: REPLACE_AT_INDEX,
      payload: {route, index},
    };
  },
  replacePrevious: function replacePrevious(route) {
    return {
      type: REPLACE_PREVIOUS,
      payload: route,
    };
  },
  immediatelyResetRouteStack: function immediatelyResetRouteStack(routeStack) {
    return {
      type: IMMEDIATELY_RESET_ROUTE_STACK,
      payload: routeStack,
    };
  },
};
