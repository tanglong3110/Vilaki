import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../themes/theme';

export default class ButtonComponent extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
        <Text style={styles.textInButton}> {this.props.title} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create ({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MainColor,
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  textInButton: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.White,
  },
});
