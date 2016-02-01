/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

AppRegistry.registerComponent('Basic', () => () => (
  <Provider store={store}>
    <NavigatorRedux />
  </Provider>
));
