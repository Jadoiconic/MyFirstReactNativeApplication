/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, Text, View } from 'react-native';
import CartProductItem from '../../components/CartProductItem'
import products from '../../data/cart';
import ButtonComp from '../../components/Button';

const ShoppingCartScreen = () => {

    const totalPrice = products.reduce((sumedVlaue,product)=>(
        sumedVlaue + (product.item.price*product.quantity)
    ),0)
    return (
        <View style={{paddingHorizontal:5,}}>
            <View>
                <Text style={{fontSize:18,fontWeight:'bold'}}>SubTotal({products.length} items):
                    <Text style={{color:'#e47911'}}> ${totalPrice.toFixed(2)}</Text>
                </Text> 
                <ButtonComp 
                    label='Proceed to checkout' 
                    onPress={()=>console.warn('Go to checkout')}
                    containerStyles={{
                        backgroundColor:'#f7e300'
                    }}/>
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
