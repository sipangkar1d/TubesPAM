import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import {IkonExit, ImageMakanan} from '../../assets';
import ImagePicker from 'react-native-image-picker';

class TambahDanus extends Component {
  constructor() {
    super();
    this.state = {
      imageSource: null,
    };
  }

  selectPhoto() {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        this.setState({
          imageSource: source,
        });
      }
    });
  }
  render() {
    const option = {
      title: 'Pilih Gambar',
      takePhotoButtonTitle: 'Ambil Gambar',
      chooseFromLibraryButtonTitle: 'Pilih dari Galeri',
      quality: 1,
    };
    const {navigation} = this.props;
    const {} = this.state.formData;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', right: 10, top: 10}}
              onPress={() => navigation.navigate('DanusTera')}>
              <Image source={IkonExit}></Image>

              <Image
                style={styles.image}
                source={
                  this.state.imageSource != null
                    ? this.state.imageSource
                    : require('../../assets/images/Makanan.png')
                }
              />
            </TouchableOpacity>
            <Text style={styles.headertext}>Tambah Gambar</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Pilih Gambar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
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
  headertext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#696969',
    position: 'absolute',
    alignSelf: 'baseline',
    paddingLeft: 20,
    top: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
});
