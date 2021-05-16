import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import {IkonExit} from '../../assets';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker';

class TambahDanus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        nama_makanan: '',
        deskripsi_makanan: '',
        stok_harian: '',
        harga_satuan: '',
        username: '',
      },
      avatatarSrc: {},
    };
  }

  render() {
    const {navigation, route} = this.props;

    const {
      nama_makanan,
      deskripsi_makanan,
      stok_harian,
      harga_satuan,
      username,
    } = this.state.formData;
    const sourceUri = this.state.avatatarSrc.path
      ? {uri: this.state.avatatarSrc.path}
      : require('../../assets/images/noImage.png');
    const user = route.params.username;
    this.state.formData.username = user;
    console.log('ditangkap di tambah danus', this.state.formData.username);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.headertext}>Tambahkan Supply DanusTera</Text>
            <TouchableOpacity
              style={styles.exit}
              onPress={() => navigation.navigate('DanusTera')}>
              <Image source={IkonExit} style={styles.buttonexit}></Image>
            </TouchableOpacity>
            <View style={styles.row}>
              <TextInput
                placeholder="Nama makanan"
                style={styles.form}
                onChangeText={nama_makanan =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      nama_makanan,
                    },
                  }))
                }
                value={nama_makanan}
              />

              <TextInput
                placeholder="Deskripsi singkat makanan"
                style={styles.form}
                onChangeText={deskripsi_makanan =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      deskripsi_makanan,
                    },
                  }))
                }
                value={deskripsi_makanan}
              />
              <TextInput
                placeholder="Stok perhari"
                style={styles.form}
                onChangeText={stok_harian =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      stok_harian,
                    },
                  }))
                }
                value={stok_harian}
              />
              <TextInput
                placeholder="Harga satuan"
                style={styles.form}
                onChangeText={harga_satuan =>
                  this.setState(prevState => ({
                    formData: {
                      ...prevState.formData,
                      harga_satuan,
                    },
                  }))
                }
                value={harga_satuan}
              />
              <View style={styles.gambar}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 200,
                    height: 200,
                    alignSelf: 'center',
                  }}
                />
              </View>
              <TouchableOpacity onPress={this._openGalery}>
                <Text style={styles.tambahgambar}>Pilih Gambar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
              <Button
                style={styles.tambah}
                title="Tambah"
                onPress={this._tambahdanus}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  _openGalery = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: false,
    }).then(image => {
      console.log(image);
      this.setState({
        avatatarSrc: image,
      });
    });
  };
  _tambahdanus = () => {
    const {
      nama_makanan,
      deskripsi_makanan,
      stok_harian,
      harga_satuan,
      username,
    } = this.state.formData;

    const {navigation} = this.props;
    let formDataPost = new FormData();
    const {avatatarSrc, formData} = this.state;

    for (let p in formData) formDataPost.append(p, formData[p]);
    formDataPost.append('photo', {
      uri: avatatarSrc.path,
      type: avatatarSrc.mime,
      name: 'Gambar-Danus',
    });
    if (
      nama_makanan == '' ||
      deskripsi_makanan == '' ||
      username == '' ||
      stok_harian == '' ||
      harga_satuan == ''
    ) {
      Alert.alert('', 'Harap isi semua data', [
        {
          text: 'OK',
        },
      ]);
    } else {
      fetch('https://danustera.000webhostapp.com/TambahDanus.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formDataPost,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'Makanan berhasil ditambahkan') {
            setTimeout(() => {
              Alert.alert('', responseJson, [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('DanusTera'),
                },
              ]);
            }, 1000);
          } else {
            alert(responseJson);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
}

export default TambahDanus;

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
    height: windowHeight - 50,
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
  headertext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#696969',
    position: 'absolute',
    alignSelf: 'baseline',
    paddingLeft: 20,
    top: 15,
  },
  row: {
    marginTop: 50,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    flexDirection: 'column',
  },
  form: {
    borderBottomWidth: 1,
    borderColor: '#656565',
    width: windowWidth - 40,
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  tambahgambar: {
    color: '#606060',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    width: 93,
  },
  button: {
    top: 40,
    width: windowWidth - 40,
  },
  gambar: {
    paddingVertical: 10,
  },

  buttonexit: {
    right: 3,
    bottom: 3,
  },
});
