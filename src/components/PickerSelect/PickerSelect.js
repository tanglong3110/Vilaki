import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from '../../themes/theme';

export default class PickerSelect extends Component {
  render () {
    return (
      <View
        style={{
          borderRadius: 6,
        }}
      >
        <RNPickerSelect
          placeholder={this.props.placeholder}
          items={this.props.items}
          onValueChange={this.props.onValueChange}
          style={
            this.props.checkStyle ? pickerSelectStyles : pickerSelectStyles2
          }
          useNativeAndroidPickerStyle={false}
          value={this.props.value}
        />
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create ({
  inputIOS: {
    fontSize: 18,
    fontFamily: fonts.regular,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
    color: 'black',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row', // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    fontFamily: fonts.regular,
    paddingLeft: 10,
    paddingVertical: 8,
    borderRadius: 6,
    color: 'black',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row', // to ensure the text is never behind the icon
  },
});

const pickerSelectStyles2 = StyleSheet.create ({
  inputIOS: {
    fontSize: 13,
    fontFamily: fonts.medium,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
    color: 'black',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row', // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 13,
    fontFamily: fonts.medium,
    paddingLeft: 10,
    paddingVertical: 8,
    borderRadius: 6,
    color: 'black',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row', // to ensure the text is never behind the icon
  },
});
