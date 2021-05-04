import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background, DanusTeraLogo, TombolDaftar, TombolLogin } from '../../assets'

const Daftar = ({ navigation }) => {
    return (
        <ImageBackground source={Background} style={styles.container}>
            <Image source={DanusTeraLogo} style={styles.logo}></Image>
            <View style={{bottom: 20}}>
                <View name="Username" >
                    <Text style={styles.form}>Username</Text>
                    <TextInput placeholder="Masukkan Username" style={styles.placeholder}></TextInput>
                </View>
                <View name="Email" >
                    <Text style={styles.form}>Password</Text>
                    <TextInput placeholder="Masukkan Password" style={styles.placeholder}></TextInput>
                </View>
                <View name="Password" >
                    <Text style={styles.form}>Username</Text>
                    <TextInput placeholder="Masukkan Username" style={styles.placeholder}></TextInput>
                </View>
                <View name="Konfirmasi Password" >
                    <Text style={styles.form}>Password</Text>
                    <TextInput placeholder="Masukkan Password" style={styles.placeholder}></TextInput>
                </View>
            </View>
            <TouchableOpacity style={{ top: 5 }} onPress={() => navigation.navigate('Masuk')}>
                <Image source={TombolDaftar}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Masuk')}>
                <Text style={{ paddingVertical: 7, fontSize: 14, fontStyle: 'italic' }}>Sudah punya akun? Login disini</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Daftar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },
    logo: {
        bottom: 50
    },
    form: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 22,
    },
    placeholder: {
        borderBottomWidth: 1,
        height: 30,
        fontSize: 14,
        paddingTop: 5,
        marginTop: 5,
        paddingHorizontal: 5,
        width: 200
    }

})
