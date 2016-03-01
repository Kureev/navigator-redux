const React = require('react-native');
const Immutable = require('immutable');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const actions = require('../actions');
const invariant = require('invariant');

const {View, StyleSheet, PropTypes} = React;
const styles = StyleSheet.create({container: {flex: 1}});

/**
 * A functional component for rendering navigator
 * @param  {Number} options.index Navigation stack's current index
 * @param  {Immutable.Stack} options.stack Navigation stack
 * @param  {Object} options.actions Navigator's actions
 * @param  {Function} options.renderer Container renderer function
 * @param  {Number|Object} options.style Custom navigator style
 * @return {React.Element}
 */
function renderNavigator(props) {
  const {index, stack, actions, renderer, style} = props;
  const route = stack.get(index);

  invariant(route.component,
    'You must pass a React component. Check the place where you ' +
    'use `makeNavState`,seems you missed to fulfill it with data!'
  );

  return renderer(
    React.createElement(route.component, {...route.passProps, nav: {index, stack, actions}})
  );
}

renderNavigator.propTypes = {
  index: PropTypes.number.isRequired,
  stack: PropTypes.instanceOf(Immutable.Stack).isRequired,
  actions: PropTypes.object.isRequired,
  renderer: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

renderNavigator.defaultProps = {
  renderer: (route) => {
    return <View style={styles.container}>{route}</View>;
  },
};

module.exports = connect(
  (state) => ({
    stack: state.__navRedux.stack,
    index: state.__navRedux.index,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(renderNavigator);
