import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import HeaderComponent from './../../components/Header';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon name="user" type="font-awesome" size={25} color={tintColor} />
      );
    },
  };
  render () {
    return (
      <SafeAreaView>
        <HeaderComponent headerText="Profile" />
        <Text> ProfileScreen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({});
