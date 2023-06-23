/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, Text, View } from 'react-native';
import CartProductItem from '../../components/CartProductItem'
import products from '../../data/cart';

const ShoppingCartScreen = () => {

    const totalPrice = products.reduce((sumedVlaue,product)=>(
        sumedVlaue + (product.item.price*product.quantity)
    ),0)
    return (
        <View>
            <View>
                <Text>SubTotal({products.length} items):${totalPrice.toFixed(2)}</Text>
            </View>
            <FlatList
            data={products}
            renderItem={({item})=><CartProductItem cartItem={item
            }/>}
            keyExtractor={(item)=>item.id}
            showsVerticalScrollIndicator={false}
             />
        </View>
    )
};


export default ShoppingCartScreen;
