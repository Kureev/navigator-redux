import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Provider, connect} from 'react-redux';
import {NavigatorRedux, makeNavState, navigationReducer} from 'navigator-redux';
import Content from './Content';
import {createStore, bindActionCreators} from 'redux';

const store = createStore(navigationReducer, makeNavState([<Content/>]));

AppRegistry.registerComponent('Basic', () => () => (
  <Provider store={store}>
    <NavigatorRedux />
  </Provider>
));
