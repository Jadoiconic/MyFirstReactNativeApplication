/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, View } from 'react-native';
import ProductItem from '../../components/ProductItem'
import products from '../../data/products';

const HomeScreen = () => {
    return (
        <View>
            <FlatList
            data={products}
            renderItem={({item})=><ProductItem items={item
            }/>}
            keyExtractor={(item)=>item.id}
            showsVerticalScrollIndicator={false}
             />
        </View>
    )
};


export default HomeScreen;
