import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {UsernameContext} from '../../components';
import {About, IkonPanah, FotoProfil, ImageHeader} from '../../assets';
const Profil = ({navigation}) => {
  // const user = route.params.user;
  //menampung data dari api
  const [data, setData] = useState([]);
  var user = useContext(UsernameContext);
  // console.log('sampai di profil', user);
  //fungsi untuk mengambil data dengan get
  const getDataFromApiAsync = async () => {
    try {
      let response = await fetch(
        'http://tubespam.awesomeproject.id/profil.php',
        {
          method: 'POST',
          header: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({username: user}),
        },
      );
      let json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    }
  };

  //otomatis dijalankan
  useEffect(() => {
    getDataFromApiAsync();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.profil}>
        <Image source={FotoProfil}></Image>
        <Text style={styles.namalengkap}>{item.nama_lengkap}</Text>
        <View style={styles.listdata}>
          <View style={styles.row}>
            <Text style={styles.teksform}>Username</Text>
            <Text style={styles.data}>{item.username}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.teksform}>Email</Text>
            <Text style={styles.data}>{item.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.teksform}>Alamat</Text>
            <Text style={styles.data}>{item.alamat}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.teksform}>Jenis Kelamin</Text>
            <Text style={styles.data}>{item.jenis_kelamin}</Text>
          </View>
          <View style={[styles.row, {borderBottomWidth: 1}]}>
            <Text style={styles.teksform}>No Telepon</Text>
            <Text style={styles.data}>+62 {item.no_telp}</Text>
          </View>
        </View>
        <View style={styles.listdata}>
          <TouchableOpacity
            style={styles.row}
            onPress={() =>
              navigation.navigate('AturPassword', {
                username: item.username,
              })
            }>
            <Text style={styles.teksform}>Atur Password</Text>
            <Image source={IkonPanah} style={styles.panah}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              Alert.alert('', 'Keluar?', [
                {
                  text: 'Batal',
                },
                {
                  text: 'Keluar',
                  onPress: () => navigation.navigate('Login'),
                },
              ]);
            }}>
            <Text style={styles.teksform}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageHeader} style={styles.header} />
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          margin: 5,
          right: 0,
        }}>
        <Image source={About} />
      </TouchableOpacity>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id_user}
        />
      </View>
    </View>
  );
};

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
