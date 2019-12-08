import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../themes/theme';
import {Header, Icon} from 'react-native-elements';

export default class HeaderComponent extends Component {
  render () {
    return (
      <View>
        {this.props.backIcons
          ? <Header
              leftComponent={
                <TouchableOpacity onPress={this.props.onPressBack}>
                  <Icon name="arrow-back" color={colors.White} size={30} />
                </TouchableOpacity>
              }
              centerComponent={{
                text: this.props.headerText,
                style: {
                  fontSize: 23,
                  color: colors.White,
                  fontFamily: fonts.regular,
                  width: '100%',
                },
              }}
              containerStyle={{
                flexDirection: 'row',
                height: 80,
                backgroundColor: '#50BAB6',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          : <Header
              centerComponent={{
                text: this.props.headerText,
                style: {
                  fontSize: 23,
                  color: colors.White,
                  fontFamily: fonts.regular,
                },
              }}
              containerStyle={styles.container}
            />}
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    backgroundColor: '#50BAB6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 23,
    color: colors.White,
    fontFamily: fonts.regular,
    width: '100%',
  },
});
