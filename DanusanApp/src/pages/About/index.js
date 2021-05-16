import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {IkonExit} from '../../assets';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.exit}
          onPress={() => navigation.navigate('DanusTera')}>
          <Image source={IkonExit} style={styles.buttonexit}></Image>
        </TouchableOpacity>
        <View style={styles.about}>
          <Text style={styles.judul}>About Us</Text>
          <View>
            <Text style={styles.desk}>
              Aplikasi dibuat untuk memenuhi Tugas besar mata kuliah
              Pengembangan Aplikasi Mobile (PAM) Institut Teknologi Sumatera.
            </Text>
            <Text style={styles.desk}>
              Pembuatan aplikasi ini dilakukan oleh 4 orang, yaitu:
            </Text>
            <Text style={[styles.desk, {paddingLeft: 10}]}>
              - Daniel Sipangkar (118140080)
            </Text>
            <Text style={[styles.desk, {paddingLeft: 10}]}>
              - Cita Sari Marito Siadari (118140172)
            </Text>
            <Text style={[styles.desk, {paddingLeft: 10}]}>
              - Vina Alvionita (118140105)
            </Text>
            <Text style={[styles.desk, {paddingLeft: 10}]}>
              - Yuni Nurdiyanti 118140044
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#138BFE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight,
    marginTop: 25,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
  exit: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'flex-end',
    right: 10,
    top: 10,
  },
  about: {
    alignSelf: 'flex-start',
    padding: 20,
    flexDirection: 'column',
    flex: 1,
    bottom: 30,
  },
  judul: {
    fontSize: 18,
    color: '#777',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  desk: {
    fontSize: 13,
    marginTop: 15,
  },
  
});
