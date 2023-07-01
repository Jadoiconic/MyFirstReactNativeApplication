/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const QuantitySelector = () => {
    const [quantity, sertQuantity] = useState(1)
    const decrease = () => {
        if (quantity > 0) {
            sertQuantity(quantity - 1)
        }
    }
    const increase = () => {
        sertQuantity(quantity + 1)
    }
    return (
        <View style={styles.root}>
            <Pressable onPress={decrease} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.buttonText}> {quantity} </Text>
            <Pressable onPress={increase} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 135,
        justifyContent: 'space-between',
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
    },
    buttonText: {
        borderColor: '#d1d1d1',
        fontSize: 18,
    },
})


export default QuantitySelector

