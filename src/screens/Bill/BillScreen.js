import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import HeaderComponent from './../../components/Header';

export default class BillScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon name="history" type="font-awesome" size={25} color={tintColor} />
      );
    },
  };
  render () {
    return (
      <SafeAreaView>
        <HeaderComponent headerText="Bill" />
        <Text> BillScreen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({});
