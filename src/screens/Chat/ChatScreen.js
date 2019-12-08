import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import HeaderComponent from './../../components/Header';

export default class ChatScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return <Icon name="chat" size={25} color={tintColor} />;
    },
  };
  render () {
    return (
      <SafeAreaView>
        <HeaderComponent headerText="Message" />
        <Text> ChatScreen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({});
