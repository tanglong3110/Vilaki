import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import PickerLang from './../../components/PickerLang';

export default class ChooseLang extends Component {
  static navigationOptions = {
    header: null,
  };
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <PickerLang onPress={() => this.props.navigation.navigate ('Login')} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
