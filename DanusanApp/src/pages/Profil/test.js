import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

const Profil = () => {
  //menampung data dari api
  const [data, setData] = useState([]);

  //fungsi untuk mengambil data dengan get
  const getDataFromApiAsync = async () => {
    try {
      let response = await fetch(
        'http://10.117.90.83/api/API-DanusanApp/API/profil.php',
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
      <View>
        <Text>{item.username}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>Data dari API</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({});
