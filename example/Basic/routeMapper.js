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
      return Content;

    case 'PushedContent'
      return PushedContent;

    default:
      return null;
  }
};

module.exports = routeMapper;
