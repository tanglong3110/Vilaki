import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {colors,fonts} from './themes/theme';
export default class Welcome extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./../assets/image/logo.png')}
                    style={{marginTop : 108}}
                ></Image>
                <Text style={styles.vilaki}>VILAKI</Text>
                <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => {this.props.navigation.navigate('ChooseLangScreen')}}
                >
                    <Text style={styles.textInButton}> GET STARTED </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
        backgroundColor : colors.MainColor
    },
    vilaki : {
        fontSize : 80,
        color : '#FFF',
        fontFamily : fonts.semi_bold
    },
    buttonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#FFF',
        fontFamily : fonts.bold,
        width : '60%',
        height : 56,
        borderRadius : 28
    },
    textInButton : {
        fontFamily : fonts.bold,
        fontSize : 27,
        color : colors.MainColor
    }
})
