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
import {IkonExit, ImageMakanan, TombolHapus} from '../../assets';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.heading}>Nama Makanan</Text>
          <TouchableOpacity
            style={{alignSelf: 'baseline', left: windowWidth - 40, bottom: 60}}
            onPress={() => navigation.navigate('DanusTera')}>
            <Image source={IkonExit}></Image>
          </TouchableOpacity>
          <Image source={ImageMakanan} style={styles.img} />
          <View style={styles.deksripsi}>
            <View style={styles.kiri}>
              <Text style={styles.teks}>Penjual</Text>
              <Text style={styles.teks}>Alamat Penjual</Text>
              <Text style={styles.teks}>Nama Makanan</Text>
              <Text style={styles.teks}>Stok Makanan</Text>
              <Text style={styles.teks}>No. Telepon</Text>
            </View>
            <View style={styles.kanan}>
              <Text style={styles.teks}>: Nama Penjual</Text>
              <Text style={styles.teks}>: Alamat </Text>
              <Text style={styles.teks}>: Bakwan</Text>
              <Text style={styles.teks}>: 1000 biji/hari</Text>
              <Text style={styles.teks}>: +123456789</Text>
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

export default Login;
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
    paddingVertical: 20,
    color: '#696969',
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
  deksripsi: {
    position: 'relative',
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  kiri: {},
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
});
