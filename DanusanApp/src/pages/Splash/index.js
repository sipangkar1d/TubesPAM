import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SpashBackground, Logo } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 1000)
    }, [navigation]);

    return (
        <ImageBackground source={SpashBackground} style={styles.background}>
            <Image source={Logo} style={styles.logo}></Image>
            <Text style={styles.text}>
                118140080 - Daniel Sipangkar
            </Text>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 113
    },
    text: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 200,
        color: 'white'
    }
})
