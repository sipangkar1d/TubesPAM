import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {ImageHeader, ImageMakanan, TombolTambah} from '../../assets';

class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {nama_makanan: 'Donat', stok_harian: '1000'};
  }

  render() {
    const {nama_makanan, stok_harian} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={ImageHeader}
          style={styles.header}></ImageBackground>
        <View style={styles.body}>
          <ScrollView>
            <View>
              <Text style={styles.teksheader}>
                Supplier Danus disekitar ITERA
              </Text>
            </View>
            <View style={styles.danus}>
              <TouchableOpacity
                style={styles.jenisdanus}
                onPress={() => navigation.navigate('DeskripsiDanus')}>
                <Image
                  source={ImageMakanan}
                  style={styles.imagemakanan}></Image>
                <View>
                  <Text style={styles.namamakanan}>{nama_makanan}</Text>
                  <Text style={styles.biji}>{stok_harian} biji/hari</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.jenisdanus}
                onPress={() => navigation.navigate('DeskripsiDanus')}>
                <Image
                  source={ImageMakanan}
                  style={styles.imagemakanan}></Image>
                <View>
                  <Text style={styles.namamakanan}>{nama_makanan}</Text>
                  <Text style={styles.biji}>{stok_harian} biji/hari</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.jenisdanus}
                onPress={() => navigation.navigate('DeskripsiDanus')}>
                <Image
                  source={ImageMakanan}
                  style={styles.imagemakanan}></Image>
                <View>
                  <Text style={styles.namamakanan}>{nama_makanan}</Text>
                  <Text style={styles.biji}>{stok_harian} biji/hari</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.jenisdanus}
                onPress={() => navigation.navigate('DeskripsiDanus')}>
                <Image
                  source={ImageMakanan}
                  style={styles.imagemakanan}></Image>
                <View>
                  <Text style={styles.namamakanan}>{nama_makanan}</Text>
                  <Text style={styles.biji}>{stok_harian} biji/hari</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.tambah}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TambahDanus')}>
              <Image source={TombolTambah}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Beranda;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#138BFE',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: 161,
    height: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  body: {
    width: windowWidth + 2,
    height: windowHeight + 19,
    borderRadius: 20,
    borderColor: '#138BFE',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingBottom: 120,
  },
  teksheader: {
    paddingLeft: 20,
    paddingTop: 15,
    color: '#696969',
    fontWeight: 'bold',
  },
  danus: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  jenisdanus: {
    width: windowWidth - 40,
    height: 100,
    borderRadius: 15,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imagemakanan: {
    marginVertical: 15,
    marginLeft: 10,
  },
  tambah: {
    bottom: 65,
    right: 10,
    paddingLeft: windowWidth - 60,
  },
  namamakanan: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#138BFE',
    paddingTop: 15,
    paddingLeft: 25,
  },
  biji: {
    fontSize: 12,
    color: 'black',
    paddingTop: 5,
    paddingLeft: 25,
  },
});
