import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class CalcDisplay extends React.Component {

    static dafaultProps = {
        display: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    display:{

    }
})