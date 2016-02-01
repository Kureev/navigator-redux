/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import reducer from './reducers/navigate';
import makeNavState from './makeNavState';
import actions from './actions/navigation';
import NavigatorRedux from './components/NavigatorRedux';
import Content from './Content';
import { createStore, bindActionCreators } from 'redux';

const store = createStore(reducer, makeNavState([
  <Content />,
]));

class Basic extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorRedux />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Basic', () => Basic);
