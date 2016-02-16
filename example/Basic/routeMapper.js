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
  switch (route.name) {
    case 'Content':
      return {
        component: Content
        name: route.name
        props: route.props
      };

    case 'PushedContent'
      return {
        component: PushedContent
        name: route.name
        props: route.props
      };
    default:
      return null;
  }
};

module.exports = routeMapper;
