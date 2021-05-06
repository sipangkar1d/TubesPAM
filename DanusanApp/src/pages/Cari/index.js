import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageHeader, IkonSearchbar, ImageMakanan } from '../../assets'

const Cari = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ImageHeader} style={styles.header}></ImageBackground>
            <View style={styles.body}>
                <View style={{ position: 'relative' }}>
                    <TextInput placeholder="Cari danusan..." style={styles.textinput} />
                    <Image source={IkonSearchbar} style={styles.search} />
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.danus}>
                            <TouchableOpacity style={styles.jenisdanus} onPress={() => navigation.navigate('DeskripsiDanus')}>
                                <Image source={ImageMakanan} style={styles.imagemakanan}></Image>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#696969', paddingTop: 15, paddingLeft: 25 }}>Nama Makanan</Text>
                                    <Text style={{ fontSize: 12, color: '#696969', paddingTop: 5, paddingLeft: 25 }}>Nama Penjual</Text>
                                    <Text style={{ fontSize: 12, color: '#b4b4b4', paddingTop: 5, paddingLeft: 25 }}>1000 biji/hari</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.jenisdanus} onPress={() => navigation.navigate('DeskripsiDanus')}>
                                <Image source={ImageMakanan} style={styles.imagemakanan}></Image>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#696969', paddingTop: 15, paddingLeft: 25 }}>Nama Makanan</Text>
                                    <Text style={{ fontSize: 12, color: '#696969', paddingTop: 5, paddingLeft: 25 }}>Nama Penjual</Text>
                                    <Text style={{ fontSize: 12, color: '#b4b4b4', paddingTop: 5, paddingLeft: 25 }}>1000 biji/hari</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Cari

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
        borderRadius: 20,
        borderColor: '#138BFE',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    textinput: {
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
        height: 30,
        fontSize: 14,
        color: '#848484',
        paddingLeft: 35,
        paddingRight: 20,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 6
    },
    search: {
        position: 'absolute',
        left: 25,
        top: 25
    },
    danus: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    jenisdanus: {
        width: windowWidth - 40,
        height: 100,
        borderRadius: 15,
        borderColor: '#DCDCDC',
        borderWidth: 1,
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagemakanan: {
        marginVertical: 15,
        marginLeft: 10
    },
})


