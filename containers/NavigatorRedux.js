const React = require('react-native');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const actions = require('../actions');
const invariant = require('invariant');

const {View, StyleSheet} = React;
const styles = StyleSheet.create({container: {flex: 1}});

/**
 * A functional component for rendering navigator
 * @param  {Number} options.index Navigation stack's current index
 * @param  {Immutable.Stack} options.stack Navigation stack
 * @param  {Object} options.actions Navigator's actions
 * @param  {Number|Object} options.style Custom navigator style
 * @return {React.Element}
 */
function renderNavigator({index, stack, actions, style}) {
  const route = stack.get(index);

  invariant(route,
    'Your navigation stack is empty. Check the place where you ' +
    'use `makeNavState`,seems you missed to fulfill it with data!'
  );

  return (
    <View style={[styles.container, style]}>
      {React.cloneElement(route, {nav: {route, index, stack, actions}})}
    </View>
  );
}

module.exports = connect(
  (state) => ({
    stack: state.__nav.stack,
    index: state.__nav.index,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(renderNavigator);
