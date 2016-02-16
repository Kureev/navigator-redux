/**
 * Import/Require your react components here
 */

 const Content = require('./Content');
 const PushedContent = require('./PushedContent');


/**
 * This function must return a React Component.
 * Usually one of the ones that you imported.
 */
function routeMapper(route) {
  switch (route.title) {
    case 'Content':
      return {
        component: Content,
        name: route.title,
        passProps: route.passProps,
      };

    case 'PushedContent':
      return {
        component: PushedContent,
        name: route.title,
        passProps: route.passProps,
      };
    default:
      return null;
  }
};

module.exports = routeMapper;
