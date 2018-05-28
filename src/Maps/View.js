import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text }
  from 'native-base';
import { Alert, View, StyleSheet } from 'react-native';

export default class DynamicListExample extends Component {
  render() {
    var items = [
      {
        key: 1,
        latlng: {
          latitude: -8.12454,
          longitude: 115.09819
        },
        title: 'Masjid Nurul Mubin',
        subtitle: 'jl gunung semeru, Kp. Singaraja, Kec. Buleleng, Kabupaten Buleleng, Bali 81118'
      },
      {
        key: 2,
        latlng: {
          latitude: -8.122031,
          longitude: 115.0856
        },
        title: 'Masjid An-Nur',
        subtitle: 'Jl. Sudirman No.12, Banyuasri, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key: 3,
        latlng: {
          latitude: -8.113228,
          longitude: 115.0901
        },
        title: 'Masjid At-Taubah',
    subtitle: 'Jl.Melati Singaraja, Buleleng, Banjar Jawa, Singaraja, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 4,
        latlng: {
          latitude: -8.112945,
          longitude: 115.0828
        },
        title: 'Masjid Al-Mujahidin',
      subtitle: 'JL. Ahmad Yani, Gang Jalak Putih, No. 25, Kaliuntu, Kabupaten Buleleng, Bali 81116'
      },
      {
        key: 5,
        latlng: {
          latitude: -8.110208,
          longitude: 115.0869
        },
        title: 'Masjid Ar-Rahman',
        subtitle: 'Jl. Cendrawasih, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 6,
        latlng: {
          latitude: -8.108429,
          longitude: 115.0883
        },
        title: 'Masjid Ar-Rasyid',
        subtitle: 'Jl. Jeruk Singaraja, Buleleng, Kp. Anyar, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 7,
        latlng: {
          latitude: -8.107433,
          longitude: 115.0880
        },
        title: 'Masjid Baiturrahman',
        subtitle: 'Jl. Manggis, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 8,
        latlng: {
          latitude: -8.107433,
          longitude: 115.0880
        },
        title: 'Masjid Baiturrahman',
        subtitle: 'Jl. Manggis, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 9,
        latlng: {
          latitude: -8.105889,
          longitude: 115.0893
        },
        title: 'Masjid Agung Jami Singaraja',
    subtitle: 'Jl. Imam Bonjol No.65, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 10,
        latlng: {
          latitude: -8.106516,
          longitude: 115.0910
        },
        title: 'Masjid Nurul Amin',
        subtitle: 'Jl. Hasanudin No.19, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81113'
      },
      {
        key: 11,
        latlng: {
          latitude: -8.104707,
          longitude: 115.0886
        },
        title: 'Masjid Noor',
        subtitle: 'Jl. Erlangga, Kp. Kajanan, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 12,
        latlng: {
          latitude: -8.104779,
          longitude: 115.0870
        },
        title: 'Masjid Taqwa',
        subtitle: 'Jl. Patimura No.117, Kp. Bugis, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key: 13,
        latlng: {
          latitude: -8.106972,
          longitude: 115.0825
        },
        title: 'Masjid Baiturrahim',
        subtitle: 'Jl. Merak No.38, Kp. Anyar, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
    ];
    return (
      <Container style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Masjid Sekitar Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
        <Content>

          <List
            dataArray={items}
            renderRow={(item) =>
              <ListItem
                onPress={() =>
                  Alert.alert(
                    'Alamat',
                    item.subtitle,
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                  )

                }
              >
                <Text>{item.key}. {item.title}</Text>{}
                <Text note> ( {item.latlng.latitude}, {item.latlng.longitude})</Text>

              </ListItem>
            }

          >
          </List>

        </Content>
        </View>
      </Container>
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
