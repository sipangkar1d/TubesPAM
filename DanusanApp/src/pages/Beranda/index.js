import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ImageHeader, TombolTambah, Refresh, About} from '../../assets';
import {UsernameContext} from '../../components';

const Beranda = ({navigation}) => {
  const [data, setData] = useState([]);

  var isLoading = false;

  const getDataFromApiAsync = async () => {
    try {
      let response = await fetch(
        'https://danustera.000webhostapp.com/tampil.php',
      );
      isLoading = true;
      let json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    }
    isLoading = false;
  };

  var user = useContext(UsernameContext);

  useEffect(() => {
    getDataFromApiAsync();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.danus}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DeskripsiDanus', {
              nama_makanan: item.nama_makanan,
              foto_makanan: item.foto_makanan,
              deksripsi_makanan: item.deksripsi_makanan,
              nama_lengkap: item.nama_lengkap,
              stok_harian: item.stok_harian,
              alamat: item.alamat,
              no_telp: item.no_telp,
              harga_satuan: item.harga_satuan,
              id_makanan: item.id_makanan,
            });
          }}>
          <View style={styles.jenisdanus}>
            <Image
              style={styles.gambar}
              source={{
                uri: item.foto_makanan,
              }}
            />
            <Text style={styles.nama}>{item.nama_makanan}</Text>
            <Text style={styles.harga}>Rp. {item.harga_satuan},-</Text>
            <Text style={styles.np}>{item.nama_lengkap}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageHeader} style={styles.imgheader} />
      <View style={styles.body}>
        <Text style={styles.header}>Supplier Danus disekitar ITERA</Text>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id_makanan}
          refreshing={isLoading}
          onRefresh={getDataFromApiAsync}
        />
        <View style={styles.tambah}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TambahDanus', {
                username: user,
              })
            }>
            <Image source={TombolTambah}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Beranda;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#138BFE',
    flex: 1,
    alignItems: 'center',
  },
  imgheader: {
    width: 161,
    height: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  body: {
    width: windowWidth + 2,
    borderRadius: 20,
    borderColor: '#138BFE',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingBottom: 120,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 15,
    color: '#696969',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  refresh: {
    width: 25,
    height: 25,
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
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#138BFE',
    paddingTop: 15,
    paddingLeft: 25,
  },
  np: {
    fontSize: 12,
    color: 'black',
    alignSelf: 'flex-start',
    position: 'absolute',
    marginLeft: 105,
    marginTop: 40,
    fontWeight: 'bold',
  },
  harga: {
    fontSize: 12,
    color: 'black',
    alignSelf: 'flex-start',
    position: 'absolute',
    marginLeft: 105,
    marginTop: 60,
    fontWeight: 'bold',
  },
  gambar: {
    marginVertical: 15,
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
  },
  tambah: {
    bottom: 65,
    right: 10,
    paddingLeft: windowWidth - 60,
  },
});
