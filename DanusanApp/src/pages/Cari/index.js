import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {IkonSearchbar, ImageHeader} from '../../assets';

const Cari = ({navigation}) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  var isLoading = false;

  const fetchPost = () => {
    const apiUrl = 'https://danustera.000webhostapp.com/tampil.php';
    isLoading = true;
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        setFilterData(responseJson);
        setMasterData(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
    isLoading = false;
  };

  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.nama_makanan
          ? item.nama_makanan.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };
  const ItemView = ({item}) => {
    return (
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
        <Text style={styles.itemStyle}>{item.nama_makanan.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '$138BFE'}} />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={ImageHeader} style={styles.header} />
      <View style={styles.body}>
        <View style={{position: 'relative', marginTop: 10, height: windowHeight-windowHeight/5}}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Cari Danusan..."
            underlineColorAndroid="transparent"
            onChangeText={text => searchFilter(text)}
          />
          <Image source={IkonSearchbar} style={styles.search} />

          <FlatList
            data={filterData}
            keyExtractor={(Item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            refreshing={isLoading}
            onRefresh={fetchPost}
          />
        </View>
      </View>
    </View>
  );
};

export default Cari;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#138BFE',
    flex: 1,
    alignItems: 'center',
  },
  itemStyle: {
    paddingLeft: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#dedede',
    fontSize: 14,
  },
  textInputStyle: {
    backgroundColor: '#f3f3f3',
    borderRadius: 20,
    width: windowWidth - 40,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingLeft: 40,
    paddingVertical: 0,
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
  search: {
    position: 'absolute',
    margin: 20,
    left: 10,
  },
});
