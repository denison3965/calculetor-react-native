
require('../lib/swisscalc.lib.format.js')
require('../lib/swisscalc.lib.operator.js')
require('../lib/swisscalc.lib.operatorCache.js')
require('../lib/swisscalc.lib.shuntingYard.js')
require('../lib/swisscalc.display.numericDisplay.js')
require('../lib/swisscalc.display.memoryDisplay.js')
require('../lib/swisscalc.calc.calculator.js')

import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { CalcButton, CalcDisplay } from './../components'


export default class CalculatorScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            display: "0"
        }

        // Initialize calculator...
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
            

    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display}  />
                </View>
                
                <View>
                    <View style={styles.buttonRow}>
                        <CalcButton title="C" color="#292929" backgroundColor="#A5A5A5"/>
                        <CalcButton title="+/-" color="#292929" backgroundColor="#A5A5A5"/>
                        <CalcButton title="%" color="#292929" backgroundColor="#A5A5A5"/>
                        <CalcButton title="/" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="7" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="8" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="9" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="x" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="4" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="5" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="6" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="-" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="1" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="2" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="3" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="+" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="0" color="#FEEDBA" backgroundColor="#333333" style={{flex:0.8}}/>
                        <CalcButton title="." color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton title="=" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>
                </View>
                
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    displayContainer: {
        flex: 1,
        justifyContent: "flex-end"
    }
})