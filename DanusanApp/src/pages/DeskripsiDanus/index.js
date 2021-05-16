import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {IkonExit} from '../../assets';

class DeskripsiDanus extends Component {
  render() {
    const {navigation, route} = this.props;
    // var nm = route.params.nama_makanan;
    // console.log('nama makanan:', nm);
    var nama_penjual = route.params.nama_lengkap;
    var nama_makanan = route.params.nama_makanan;
    var deksripsi_makanan = route.params.deksripsi_makanan;
    var alamat = route.params.alamat;
    var no_telp = route.params.no_telp;
    var harga_satuan = route.params.harga_satuan;
    var stok_harian = route.params.stok_harian;
    var gambar;
    if (route.params.foto_makanan != '') {
      gambar = route.params.foto_makanan;
    } else {
      gambar = '../../assets/images/noImage.png';
    }

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.heading}>{nama_makanan}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('DanusTera')}
            style={{
              alignSelf: 'flex-end',
              borderWidth: 1,
              width: 25,
              height: 25,
              justifyContent: 'center',
              right: 10,
              bottom: 40,
              borderColor: 'white',
            }}>
            <Image source={IkonExit} style={{}}></Image>
          </TouchableOpacity>
          <Image
            style={styles.img}
            source={{
              uri: gambar,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.desk}>{deksripsi_makanan}</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.kiri}>
              <Text style={styles.teks}>Nama Penjual</Text>
              <Text style={styles.teks}>Alamat Penjual</Text>
              <Text style={styles.teks}>No. Telepon</Text>
              <Text style={styles.teks}>Harga Satuan</Text>
              <Text style={styles.teks}>Stok Harian</Text>
            </View>
            <View style={styles.kanan}>
              <Text style={styles.teks}>: {nama_penjual}</Text>
              <Text style={styles.teks}>: {alamat}</Text>
              <Text style={styles.teks}>: +62 {no_telp}</Text>
              <Text style={styles.teks}>: Rp. {harga_satuan} ,- </Text>
              <Text style={styles.teks}>: {stok_harian} /hari</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default DeskripsiDanus;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#138BFE',
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    width: '100%',
    height: '95%',
    top: '5%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  heading: {
    paddingTop: 20,
    color: '#138BFE',
    fontWeight: 'bold',
    fontSize: 24,
  },
  img: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: -10,
  },
  form: {
    position: 'relative',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },

  kanan: {
    paddingLeft: 20,
  },
  teks: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#696969',
  },
  hapus: {
    marginTop: 50,
  },
  exit: {
    top: 20,
  },
  desk: {
    paddingVertical: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    flex: 1,
  },
});
