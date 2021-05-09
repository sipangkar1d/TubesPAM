import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import Api from './components/Api';


const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <Api/> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
