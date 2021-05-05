import React from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FotoGaris, FotoPanah, IkonExit, Tambah } from '../../assets'

const TambahDanus = ({ navigation }) => {
    const tambahdanus = () => {
        Alert.alert(
            "Alert",
            "Supply Danus telah ditambahkan",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate('DanusTera')
                }
            ]
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity style={{ alignSelf: 'baseline', position: 'relative', left: windowWidth - 40, top: 10 }} onPress={() => navigation.navigate('DanusTera')}>
                    <Image source={IkonExit} ></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#696969', position: 'absolute', alignSelf: 'baseline', paddingLeft: 20, top: 25 }}>
                    Tambahkan Supply DanusTera
                    </Text>
                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity style={styles.form}>
                        <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 10, marginBottom: 4 }}></Image>
                        <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                        <Text style={{ fontSize: 14, bottom: 20 }}>Jenis Makanan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.form}>
                        <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 10, marginBottom: 4 }}></Image>
                        <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                        <Text style={{ fontSize: 14, bottom: 20 }}>Nama Makanan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.form}>
                        <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 10, marginBottom: 4 }}></Image>
                        <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                        <Text style={{ fontSize: 14, bottom: 20 }}>Stok Perhari</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.form}>
                        <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 10, marginBottom: 4 }}></Image>
                        <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                        <Text style={{ fontSize: 14, bottom: 20 }}>Upload Gambar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ top: 20 }} onPress={tambahdanus}>
                    <Image source={Tambah}></Image>
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
    form: {
        marginTop: -10
    },
    tombol: {

    }

})
