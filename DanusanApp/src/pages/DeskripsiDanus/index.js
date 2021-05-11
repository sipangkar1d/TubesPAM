import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {IkonExit, TombolHapus} from '../../assets';

class DeskripsiDanus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_penjual: 'Daniel Sipangkar',
      nama_makanan: 'Bakwan Jagung',
      deksripsi_makanan: 'Gorengan renyah murah dan berkualitas',
      alamat: 'Jl. yang dulu kita kenang',
      no_telp: '087812345678',
      harga_satuan: '800',
      stok_harian: '1000',
      gambar: '',
    };
  }

  render() {
    const {navigation} = this.props;
    const {
      nama_penjual,
      nama_makanan,
      deksripsi_makanan,
      alamat,
      no_telp,
      harga_satuan,
      stok_harian,
      gambar,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.heading}>Nama Makanan</Text>
          <TouchableOpacity
            style={{alignSelf: 'baseline', left: windowWidth - 40, bottom: 60}}
            onPress={() => navigation.navigate('DanusTera')}>
            <Image source={IkonExit} style={styles.exit}></Image>
          </TouchableOpacity>
          <Text style={styles.img}>{gambar}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.desk}>{deksripsi_makanan}</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.kiri}>
              <Text style={styles.teks}>Nama Penjual</Text>
              <Text style={styles.teks}>Nama Makanan</Text>
              <Text style={styles.teks}>Alamat Penjual</Text>
              <Text style={styles.teks}>No. Telepon</Text>
              <Text style={styles.teks}>Harga Satuan</Text>
              <Text style={styles.teks}>Stok Harian</Text>
            </View>
            <View style={styles.kanan}>
              <Text style={styles.teks}>: {nama_penjual}</Text>
              <Text style={styles.teks}>: {nama_makanan}</Text>
              <Text style={styles.teks}>: {alamat}</Text>
              <Text style={styles.teks}>: {no_telp}</Text>
              <Text style={styles.teks}>: Rp. {harga_satuan}</Text>
              <Text style={styles.teks}>: {stok_harian} /hari</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('', 'Hapus?', [
                {
                  text: 'Batal',
                },
                {
                  text: 'Hapus',
                  onPress: () => navigation.navigate('DanusTera'),
                },
              ]);
            }}>
            <Image source={TombolHapus} style={styles.hapus} />
          </TouchableOpacity>
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
    height: 150,
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
