import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from '../../themes/theme';

export default class PickerSelectTitle extends Component {
  render () {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <RNPickerSelect
          placeholder={this.props.placeholder}
          items={this.props.items}
          onValueChange={this.props.onValueChange}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          value={this.props.value}
        />
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create ({
  inputIOS: {
    fontSize: 20,
    fontFamily: fonts.regular,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 20,
    fontFamily: fonts.regular,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
  },
});
