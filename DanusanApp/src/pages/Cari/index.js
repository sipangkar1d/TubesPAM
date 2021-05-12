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
  TextInput,
} from 'react-native';
import { color } from 'react-native-reanimated';
import {IkonSearchbar, ImageHeader, noImage} from '../../assets';

class Cari extends Component {
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
          <View style={{position: 'relative'}}>
            <TextInput placeholder="Cari danusan..." style={styles.textinput} />
            <Image source={IkonSearchbar} style={styles.search} />
            <Text style={styles.cari}>Cari</Text>
          </View>
          <View>
            <ScrollView>
              <View style={styles.danus}>
                <TouchableOpacity
                  style={styles.jenisdanus}
                  onPress={() => navigation.navigate('DeskripsiDanus')}>
                  <Image source={noImage} style={styles.noImage}></Image>
                  <View>
                    <Text style={styles.namamakanan}>{nama_makanan}</Text>
                    <Text style={styles.biji}>{stok_harian} biji/hari</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.jenisdanus}
                  onPress={() => navigation.navigate('DeskripsiDanus')}>
                  <Image source={noImage} style={styles.noImage}></Image>
                  <View>
                    <Text style={styles.namamakanan}>{nama_makanan}</Text>
                    <Text style={styles.biji}>{stok_harian} biji/hari</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Cari;
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
  textinput: {
    backgroundColor: '#dedede',
    borderRadius: 20,
    width: windowWidth - 70,
    height: 30,
    marginVertical: 10,
    marginHorizontal: 15,
    paddingLeft: 35,
    paddingVertical: 0,
  },
  search: {
    position: 'absolute',
    marginVertical: 15,
    left: 25,
  },
  cari: {
    position: 'absolute',
    marginVertical: 11,
    marginHorizontal:5,
    alignSelf: 'flex-end',
    right: 10,
    paddingHorizontal: 7,
    paddingVertical:4,
    borderRadius: 5,
    color: '#696969',
    fontWeight: 'bold'
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
  noImage: {
    marginVertical: 15,
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
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
  tambah: {
    bottom: 65,
    right: 10,
    paddingLeft: windowWidth - 60,
  },
});
