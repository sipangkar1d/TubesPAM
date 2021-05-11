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
} from 'react-native';
import {FotoPanah, FotoProfil, ImageHeader} from '../../assets';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Sipangkar',
      nama_lengkap: 'Daniel Sipangkar',
      email: 'daniel.118140080',
      alamat: 'Jl. in aja dulu',
      jenis_kelamin: 'Laki-laki',
      no_telp: '087812345678',
    };
  }

  render() {
    const {
      username,
      nama_lengkap,
      email,
      alamat,
      jenis_kelamin,
      no_telp,
    } = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={ImageHeader}
          style={styles.header}></ImageBackground>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.profil}>
              <Image source={FotoProfil}></Image>
              <Text style={styles.namalengkap}>{nama_lengkap}</Text>
              <View style={styles.listdata}>
                <View style={styles.row}>
                  <Text style={styles.teksform}>Username</Text>
                  <Text style={styles.data}>{username}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.teksform}>Email</Text>
                  <Text style={styles.data}>{email}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.teksform}>Alamat</Text>
                  <Text style={styles.data}>{alamat}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.teksform}>Jenis Kelamin</Text>
                  <Text style={styles.data}>{jenis_kelamin}</Text>
                </View>
                <View style={[styles.row, {borderBottomWidth: 1}]}>
                  <Text style={styles.teksform}>No Telepon</Text>
                  <Text style={styles.data}>{no_telp}</Text>
                </View>
              </View>
            </View>
            <View style={styles.listdata}>
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.navigate('AturPassword')}>
                <Text style={styles.teksform}>Atur Password</Text>
                <Image source={FotoPanah} style={styles.panah}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.row} onPress={()=>{
                Alert.alert(
                  "",
                  "Keluar?",
                  [
                    {
                      text: "Batal"
                    },
                    {
                      text: "Keluar",
                      onPress: ()=>navigation.navigate('Login')
                    }
                  ]
                )
              }}>
                <Text style={styles.teksform}>Keluar</Text>
                <Image source={FotoPanah} style={styles.panah}></Image>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Profil;

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
    width: '101%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#138BFE',
    borderWidth: 1,
    backgroundColor: 'white',
    flex: 1,
  },
  profil: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  namalengkap: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  listdata: {
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginVertical: 15,
  },
  row: {
    borderTopWidth: 1,
    borderColor: '#dedede',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  teksform: {
    fontSize: 14,
    color: '#555',
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    paddingTop: 5,
  },
  panah: {
    alignSelf: 'flex-end',
    right: 20,
    bottom: 15,
    position: 'absolute',
  },
});
