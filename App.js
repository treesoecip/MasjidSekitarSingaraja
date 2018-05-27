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
          latitude:-8.1126499,
          longitude: 115.0835376
        },
        title: 'Kampus Bawah',
        subtitle: 'Jl. Ahmad Yani No. 67, Kaliuntu, Banyuasri, Buleleng, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key:2,
        latlng: {
          latitude:-8.1122168,
          longitude: 115.0828414
        },
        title: 'Kampus Tengah',
        subtitle: 'Banjar Tegal, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key:3,
        latlng: {
          latitude:-8.1333874,
          longitude: 115.1255695
        },
        title: 'Kampus Jineng Dalem',
        subtitle: 'Jinengdalem, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Universitas Pendidikan Ganesha
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
           <Text style={styles.textFooter}> ig: @migranwidiantara</Text>
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