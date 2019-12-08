import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header : null
    }

    render() {
        return (
            <View style={{justifyContent : 'center', alignItems : 'center', flex : 1}}>
                <Text onPress={() => {this.props.navigation.navigate('Home')}}> LoginScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
