'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const mapper = require('./routeMapper');

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

export default class PushedContent extends Component {
  render() {
    const { index, stack, actions } = this.props.nav;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Yo, this view has a {index + 1} position in the navigation stack!
        </Text>
        <Text style={styles.instructions}>
          In total, navigation stack contains {stack.count()} items.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => actions.push({title: 'PushedContent', component: PushedContent})}>
          <Text style={{ fontSize: 16, }}>Push</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => actions.pop()}>
          <Text style={{ fontSize: 16, }}>Pop</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
