'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PushedContent from './PushedContent';

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

export default class Content extends Component {
  render() {
    const { index, stack, actions } = this.props.nav;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => actions.push({title: 'PushedContent', component: PushedContent})}>
          <Text style={{ fontSize: 16, }}>Push</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => actions.pop}>
          <Text style={{ fontSize: 16, }}>Pop</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
