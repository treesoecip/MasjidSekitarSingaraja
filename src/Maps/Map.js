import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.117196,
      longitude: 115.0884,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0221,
    },
    markers: [
      {
        key: 1,
        latlng: {
          latitude: -8.12454,
          longitude: 115.09819
        },
        title: '1. Masjid Nurul Mubin',
        subtitle: 'jl gunung semeru, Kp. Singaraja, Kec. Buleleng, Kabupaten Buleleng, Bali 81118'
      },
      {
        key: 2,
        latlng: {
          latitude: -8.122031,
          longitude: 115.0856
        },
        title: '2. Masjid An-Nur',
        subtitle: 'Jl. Sudirman No.12, Banyuasri, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key: 3,
        latlng: {
          latitude: -8.113228,
          longitude: 115.0901
        },
        title: '3. Masjid At-Taubah',
  subtitle: 'Jl.Melati Singaraja, Buleleng, Banjar Jawa, Singaraja, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 4,
        latlng: {
          latitude: -8.112945,
          longitude: 115.0828
        },
        title: '4. Masjid Al-Mujahidin',
      subtitle: 'JL. Ahmad Yani, Gang Jalak Putih, No. 25, Kaliuntu, Kabupaten Buleleng, Bali 81116'
      },
      {
        key: 5,
        latlng: {
          latitude: -8.110208,
          longitude: 115.0869
        },
        title: '5. Masjid Ar-Rahman',
        subtitle: 'Jl. Cendrawasih, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 6,
        latlng: {
          latitude: -8.108429,
          longitude: 115.0883
        },
        title: '6. Masjid Ar-Rasyid',
        subtitle: 'Jl. Jeruk Singaraja, Buleleng, Kp. Anyar, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 7,
        latlng: {
          latitude: -8.107433,
          longitude: 115.0880
        },
        title: '7. Masjid Baiturrahman',
        subtitle: 'Jl. Manggis, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 8,
        latlng: {
          latitude: -8.107433,
          longitude: 115.0880
        },
        title: '8. Masjid Baiturrahman',
        subtitle: 'Jl. Manggis, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 9,
        latlng: {
          latitude: -8.105889,
          longitude: 115.0893
        },
        title: '9. Masjid Agung Jami Singaraja',
    subtitle: 'Jl. Imam Bonjol No.65, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 10,
        latlng: {
          latitude: -8.106516,
          longitude: 115.0910
        },
        title: '10. Masjid Nurul Amin',
        subtitle: 'Jl. Hasanudin No.19, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81113'
      },
      {
        key: 11,
        latlng: {
          latitude: -8.104707,
          longitude: 115.0886
        },
        title: '11. Masjid Noor',
        subtitle: 'Jl. Erlangga, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 12,
        latlng: {
          latitude: -8.104779,
          longitude: 115.0870
        },
        title: '12. Masjid Taqwa',
        subtitle: 'Jl. Patimura No.117, Kp. Bugis, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 13,
        latlng: {
          latitude: -8.106972,
          longitude: 115.0825
        },
        title: '13. Masjid Baiturrahim',
        subtitle: 'Jl. Merak No.38, Kp. Anyar, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Lokasi Masjid
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key={mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
              >
              <Image
                source={require('./Img/masjid5.png')}
                style={{ height: 20, width: 20 }}
              />

              </Marker>
              ))}
              </MapView>

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
    flex: 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps: {
    flex: 11
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
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
  },


});
