/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'




function MoreScreen() {

    return (
        <View style={styles.container}>
            <TextInput

                onChangeText={() => { } }
                style={{
                    padding: 15,
                    borderWidth: 1,
                    borderColor: 'teal',
                    margin: 5,
                    color: 'red',
                }}
                placeholder='Enter Email Address'
                placeholderTextColor='teal'
                textContentType='emailAdress'
                keyboardType='email-address'
                keyboardAppearance={true} />
           
            <TextInput
                secureTextEntry
                placeholder='Password'
                placeholderTextColor='teal'
                style={{
                    borderWidth: 1,
                    borderColor: 'teal',
                    padding: 15,
                    marginHorizontal: 10,
                    color: 'red'
                }} />
            <TextInput
                multiline
                placeholder='Password'
                placeholderTextColor='teal'
                style={{
                    borderWidth: 1,
                    borderColor: 'teal',
                    padding: 15,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    color: 'red',
                    height: 100,
                }} />
        </View>
    );
}

export default MoreScreen

const styles = StyleSheet.create({
    container:{
        flexx:1,
        marginTop:40,
        marginHorizontal:10,
    }
})