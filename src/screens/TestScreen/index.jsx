/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import products from '../../data/products'



const testData = ({item}) => {
    return(
        <View>
            <Image
            source={{uri:item.image}} 
            style={{width:100,height:150,resizeMode:'contain'}}
             />
        </View>
    )
}




const TestScreen = () => {

return (
    <View>
        <TextInput
        
        onChangeText={()=>{}}
        style={{
            padding:15,
            borderWidth:1,
            borderColor:'teal',
            margin:5,
            color:'red'
        }}
        placeholder='Enter Email Address'
        placeholderTextColor='teal'
        autoCompleteType='email'
        textContentType='emailAdress'
        keyboardType='email-address'
        keyboardAppearance={true}/>
        <FlatList 
            data = {products}
            renderItem={testData}
            keyExtractor={(item)=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
        <TextInput 
        secureTextEntry
        placeholder='Password'
        placeholderTextColor='teal'
        style={{
            borderWidth:1,
            borderColor:'teal',
            padding:15,
            marginHorizontal:10,
            color:'red'
        }}/>
        <TextInput 
        multiline
        placeholder='Password'
        placeholderTextColor='teal'
        style={{
            borderWidth:1,
            borderColor:'teal',
            padding:15,
            marginHorizontal:10,
            marginVertical:10,
            color:'red',
            height:100,
        }}/>
    </View>
)
}

export default TestScreen

const styles = StyleSheet.create({})