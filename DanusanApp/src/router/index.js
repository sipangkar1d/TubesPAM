import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Beranda, Cari, Daftar, DeskripsiDanus, Masuk, Profil, SignIn, Splash, TambahDanus, UploadGambar } from '../pages';
import { BottomNavigator } from '../components'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DanusTera = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Cari" component={Cari} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="DanusTera" component={DanusTera} style={styles.Header} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="Masuk" component={Masuk} options={{ headerShown: false }} />
            <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: false }} />
            <Stack.Screen name="TambahDanus" component={TambahDanus} options={{ headerShown: false }} />
            <Stack.Screen name="DeskripsiDanus" component={DeskripsiDanus} options={{ headerShown: false }} />
            <Stack.Screen name="Tambah Gambar" component={UploadGambar} />

        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    Header: {
        fontFamily: 'Rancho',
        alignContent: 'center',
        backgroundColor: '#138BFE'
    }
})