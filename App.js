import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigasi from './src/Maps/Navigasi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <Navigasi />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1
  }
  }
);
