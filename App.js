import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import MainNavigaation from './Navigation/AppNavigation';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigaation/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
