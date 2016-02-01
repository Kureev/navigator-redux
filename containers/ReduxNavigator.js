import React, { Component, View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/navigation';

import invariant from 'invariant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class NavigatorRedux extends Component {
  render() {
    const { index, stack, actions } = this.props;
    const route = stack.get(index);

    invariant(route,
      'I can find no routes, dude!'
    );

    return (
      <View style={[styles.container, this.props.style]}>
        {React.cloneElement(route, {
          nav: {
            route: route,
            index: index,
            stack: stack,
            actions: actions,
          },
        })}
      </View>
    );
  }
}

export default connect(
  (state) => ({
    stack: state.__nav.stack,
    index: state.__nav.index,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(NavigatorRedux);
