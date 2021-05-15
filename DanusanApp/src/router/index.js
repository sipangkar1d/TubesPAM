import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  About,
  AturPassword,
  Beranda,
  Cari,
  Daftar,
  DeskripsiDanus,
  Profil,
  Splash,
  TambahDanus,
} from '../pages';
import {BottomNavigator, UsernameContext} from '../components';
import Login from '../pages/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DanusTera = ({route}) => {
  const username = route.params.username;
  // console.log('Ditangkap di danustera', username);
  return (
    <UsernameContext.Provider value={username}>
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Cari" component={Cari} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </UsernameContext.Provider>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DanusTera"
        component={DanusTera}
        style={styles.Header}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahDanus"
        component={TambahDanus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeskripsiDanus"
        component={DeskripsiDanus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AturPassword"
        component={AturPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        style={styles.Header}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  Header: {
    fontFamily: 'Rancho',
    alignContent: 'center',
    backgroundColor: '#138BFE',
  },
});
