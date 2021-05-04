import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background, DanusTeraLogo, TombolLogin } from '../../assets'

const Masuk = ({ navigation }) => {
    return (
        <ImageBackground source={Background} style={styles.background}>
            <Image source={DanusTeraLogo} style={styles.logo}></Image>
            <View style={{ bottom: 40 }}>
                <View name="Username" >
                    <Text style={styles.form}>Username</Text>
                    <TextInput placeholder="Masukkan Username" style={styles.placeholder}></TextInput>
                </View>
                <View name="Password" >
                    <Text style={styles.form}>Password</Text>
                    <TextInput placeholder="Masukkan Password" style={styles.placeholder}></TextInput>
                </View>
            </View>

            <TouchableOpacity style={{ bottom: 15 }} onPress={() => navigation.navigate('DanusTera')}>
                <Image source={TombolLogin}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ bottom: 20 }} onPress={() => navigation.navigate('Daftar')}>
                <Text style={{ paddingVertical: 7, fontSize: 14, fontStyle: 'italic' }}>Belum punya akun? Daftar disini</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Masuk

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },
    logo: {
        bottom: 100
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
