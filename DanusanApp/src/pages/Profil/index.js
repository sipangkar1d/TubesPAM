import React from 'react'
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ImageHeader, FotoProfil, FotoPanah, FotoGaris } from '../../assets'

const Profil = ({navigation}) => {
    const exit = () => {
        Alert.alert(
            "",
            "Yakin ingin Keluar?",
            [
                {
                    text: "Cancel",
                },
                {
                    text:"OK",
                    onPress: ()=> navigation.navigate("Splash")
                }
            ]
        );
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={ImageHeader} style={styles.header}></ImageBackground>
            <View style={styles.body}>
                <View style={styles.profil}>
                    <Image source={FotoProfil}></Image>
                    <Text style={styles.namalengkap}>Nama Lengkap</Text>
                    <View>
                        <TouchableOpacity style={styles.gantiisiprofil}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>Username</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gantiisiprofil}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>No. Telepon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gantiisiprofil}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gantiisiprofil}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>Alamat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gantiisiprofil}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>Jenis Kelamin</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profilbawah}>
                        <TouchableOpacity style={styles.gantiisiprofil}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>Atur Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gantiisiprofil} onPress={exit}>
                            <Image source={FotoPanah} style={{ marginLeft: windowWidth - 50, width: 4, height: 10, marginTop: 25, marginBottom: 4 }}></Image>
                            <Image source={FotoGaris} style={{ width: windowWidth - 40 }}></Image>
                            <Text style={{ fontSize: 14, bottom: 20, left: 5 }}>Keluar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Profil


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#138BFE',
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: 161,
        height: 40,
        marginTop: 15,
        marginBottom: 15
    },
    body: {
        width: windowWidth + 2,
        height: windowHeight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#138BFE',
        borderWidth: 1,
        backgroundColor: 'white',
        flex: 1,
    },
    teksheader: {
        paddingLeft: 20,
        paddingTop: 15,
        color: '#696969',
        fontWeight: 'bold',
    },
    profil: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    namalengkap: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#696969',
    },
    gantiisiprofil: {
        marginBottom: -25
    },
    profilbawah: {
        paddingTop: 50
    }
})