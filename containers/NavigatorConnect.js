const {PropTypes} = require('react');
const {connect} = require('react-redux');
const invariant = require('invariant');

function NavigatorConnector(props, context) {
  invariant(context.navigatorRedux,
    'You see this message because you\'re trying to access a navigation ' +
    'outside of the NavigatorRedux provider. That wouldn\'t work. If you ' +
    'want to use one of the navigation\'s action creators, render this ' +
    'component as a child of NavigatorRedux.'
  );

  const actions = context.navigatorRedux.actions;

  return (Component) => <Component {...props} navigatorActions={actions} />;
}

NavigatorConnector.contextTypes = {
  navigatorRedux: PropTypes.object.isRequired,
};

module.exports = NavigatorConnector;
