import React from 'react'
import { Alert, Button, Dimensions, Image, ImagePickerIOS, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IkonExit } from '../../assets';


const TambahDanus = ({ navigation }) => {
    const tambahdanus = () => {
        Alert.alert(
            "",
            "Tambahkan Danus?",
            [
              {
                text: "Batal",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Tambahkan", onPress: () => console.log("OK Pressed") }
            ]
          );
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity style={{alignSelf: 'flex-end', right: 10, top: 10}} onPress={ ()=>navigation.navigate('DanusTera')}>
                    <Image source={IkonExit } ></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#696969', position: 'absolute', alignSelf: 'baseline', paddingLeft: 20, top: 25 }}>
                    Tambahkan Supply DanusTera
                    </Text>
                <View style={{ marginTop: 30, alignSelf:'flex-start', paddingLeft: 20 }}>
                    <TextInput placeholder="Jenis Makanan" style={styles.form}></TextInput>
                    <TextInput placeholder="Nama Makanan" style={styles.form}></TextInput>
                    <TextInput placeholder="Stok Perhari" style={styles.form}></TextInput>

                    <TouchableOpacity onPress={ () => navigation.navigate('Tambah Gambar')}>
                        <Text style={{color: '#606060', marginTop: 10, padding: 5, borderWidth: 1, width: 93}}>Pilih Gambar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ top: 20 }} >
                    <Button style={styles.tambah} title="Tambah" onPress={tambahdanus}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TambahDanus

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#138BFE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    form:{
        borderBottomWidth: 1,
        borderColor: '#656565',
        width: windowWidth-40,
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 5
    }
})
