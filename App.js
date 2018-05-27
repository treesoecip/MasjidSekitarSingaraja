import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
    {
        key:1,
        latlng: {
          latitude:-8.1306761,
          longitude: 115.1945678
        },
        title: 'Desa Tamblang',
        subtitle: 'Tamblang, Kubutambahan, Kabupaten Buleleng, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.181527,
          longitude:115.1816262
        },
        title: 'Desa Pakisan',
        subtitle: 'Pakisan, Kubutambahan, Kabupaten Buleleng, Bali'
      },
      {
        key:3,
        latlng: {
          latitude:-8.1406266,
          longitude: 115.1886838
        },
        title: 'Desa Bontihing',
        subtitle: 'Bontihing, Kubutambahan, Kabupaten Buleleng, Bali'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Desa yang terdapat di Kec Kubutambahan
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>Instagam : @Arthawan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});