import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ListMasjid from './View';
import Mapp from './Map';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListMasjid />
      </View>
    );
  }
}

class MasjidScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Mapp />
      </View>
    );
  }
}

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Masjid: { screen: MasjidScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey',
    },
    animationEnabled: false,
    swipeEnabled: false,
    color: 'blue',
  }
);
