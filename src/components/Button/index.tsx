/* eslint-disable prettier/prettier */
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface buttonProps {
    label: String;
    onPress: () => {};
    containerStyles: object;
}

const ButtonComp = ({ label, onPress,containerStyles }: buttonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.root,containerStyles]}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

export default ButtonComp

const styles = StyleSheet.create({
    root:{
        width:'95%',
        paddingVertical:14,
        margin:10,
        alignContent:'center',
        borderRadius:10,
    },
    text:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',

    },
})