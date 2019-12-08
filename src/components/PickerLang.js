import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity , Image} from 'react-native'
import {fonts} from './../themes/theme';
import Icon from '@expo/vector-icons/Entypo'
import {IconFlag} from './../icon/index'
export default class PickerLang extends Component {
    state = {
        isShow : true
    }
    showItemSelect () {
        this.setState({
            isShow : !this.state.isShow
        })
       
    }
    renderItem () {
        return this.state.isShow ? <></> : (<><TouchableOpacity style={styles.container} onPress={this.props.onPress}>
            <Text style={styles.textStyle}> Việt Nam </Text>
            <Image style={styles.IconFlagStyle} source={IconFlag.vn}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
            <Text style={styles.textStyle}> Korean </Text>
            <Image style={styles.IconFlagStyle} source={IconFlag.ko}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
            <Text style={styles.textStyle}> English </Text>
            <Image style={styles.IconFlagStyle} source={IconFlag.en}></Image>
        </TouchableOpacity></>)
    }

    render() {
        return (
            <View style={{height : 111}}>
                <TouchableOpacity onPress={() => this.showItemSelect()} style={styles.container}>
                    <Text style={styles.textStyle}> SELECT LANGUAGE </Text>
                    <Icon name="chevron-thin-down" size={17}></Icon>
                </TouchableOpacity>
                {this.renderItem()}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : 226,
        height : 37,
        borderRadius : 100,
        backgroundColor : '#FFF',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingLeft : 25,
        paddingRight : 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        flexDirection : 'row'
    },
    textStyle : {
        fontSize : 14,
        fontFamily : fonts.regular

    },
    IconFlagStyle : {
        width : 20,
        height : 20
    }
})
