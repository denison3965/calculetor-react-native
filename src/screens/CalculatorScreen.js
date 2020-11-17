import React from 'react'
import { View, Text, StatusBar } from 'react-native'

export default class CalculatorScreen extends React.Component {

    render() {
        return(
            <View>
                <StatusBar barStyle="light-content" />
                <Text>Calculator Screen</Text>
            </View>
        )
    }
}