import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TombolLogin, TombolDaftar, Background } from '../../assets'

const SignIn = ({ navigation }) => {
    return (
        <ImageBackground source={Background} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity style={{ paddingVertical: 7, paddingLeft: 9 }} onPress={() => navigation.navigate('Masuk')}>
                    <Image source={TombolLogin} ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 7, paddingLeft: 9 }} onPress={() => navigation.navigate('Daftar')}>
                    <Image source={TombolDaftar} ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DanusTera')}>
                    <Text style={{ paddingVertical: 7, fontSize: 14, fontStyle: 'italic' }}>Login Sebagai Tamu</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default SignIn

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },
    logo: {
        width: 200,
        height: 113
    },
    container: {
        alignContent: 'center',
        justifyContent: 'center',
    },
})
