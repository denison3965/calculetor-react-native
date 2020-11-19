
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
    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({ display: this.calc.getMainDisplay() });
      }
    
      onUnaryOperatorPress = (operator) => {
        this.calc.addUnaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
      }
    
      onBinaryOperatorPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
      }
    
      onEqualsPress = () => {
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() });
      }
    
      onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() });
      }
    
      onPlusMinusPress = () => {
        this.calc.negate();
        this.setState({ display: this.calc.getMainDisplay() });
      }
    
      onBackspacePress = () => {
        this.calc.backspace();
        this.setState({ display: this.calc.getMainDisplay() });
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
                        <CalcButton onPress={() => this.onClearPress()} title="C" color="#292929" backgroundColor="#A5A5A5"/>
                        <CalcButton onPress={() => this.onPlusMinusPress()}title="+/-" color="#292929" backgroundColor="#A5A5A5"/>
                        <CalcButton onPress={() => { this.onUnaryOperatorPress(this.oc.PercentOperator) }} title="%" color="#292929" backgroundColor="#A5A5A5"/>
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.DivisionOperator) }} title="/" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.onDigitPress("7")} title="7" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => this.onDigitPress("8")} title="8" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => this.onDigitPress("9")} title="9" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.MultiplicationOperator) }} title="x" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.onDigitPress("4")} title="4" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => this.onDigitPress("5")} title="5" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => this.onDigitPress("6")} title="6" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.SubtractionOperator)}}title="-" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.onDigitPress("1")} title="1" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => this.onDigitPress("2")} title="2" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => this.onDigitPress("3")} title="3" color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.AdditionOperator)}} title="+" color="#FEEDBA" backgroundColor="#FA9402"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.onDigitPress("0")} title="0" color="#FEEDBA" backgroundColor="#333333" style={{flex:0.8}}/>
                        <CalcButton onPress={() => this.onDigitPress(".")} title="." color="#FEEDBA" backgroundColor="#333333"/>
                        <CalcButton onPress={this.onEqualsPress}title="=" color="#FEEDBA" backgroundColor="#FA9402"/>
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