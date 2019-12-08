import React, { Component } from 'react'
import MainNavigation from './src/router/index';
import { Text, StyleSheet, View,ActivityIndicator } from 'react-native'
import * as Font from 'expo-font';
import LoginScreen from './src/screens/Login/LoginScreen'
export default class App extends Component {

  state = {
    isLoading : true
  }

  async componentDidMount () {
    await Font.loadAsync({
      "Oswald-Bold" : require('./assets/Fonts/Oswald-Bold.ttf'),
      "Oswald-ExtraLight" : require('./assets/Fonts/Oswald-ExtraLight.ttf'),
      "Oswald-Light" : require('./assets/Fonts/Oswald-Light.ttf'),
      "Oswald-Medium" : require('./assets/Fonts/Oswald-Medium.ttf'),
      "Oswald-Regular" : require('./assets/Fonts/Oswald-Regular.ttf'),
      "Oswald-SemiBold" : require('./assets/Fonts/Oswald-SemiBold.ttf')
    })

    this.setState({
      isLoading : false
    })
  }
  render() {
    return (
      // <View style={{alignItems : 'center', justifyContent : 'center', height : '100%'}}>
      this.state.isLoading ?  <ActivityIndicator/> : <MainNavigation/>
    /* </View> */
    )
  }
}

const styles = StyleSheet.create({})
