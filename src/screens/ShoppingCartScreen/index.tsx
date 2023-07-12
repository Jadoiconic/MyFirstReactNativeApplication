/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import CartProductItem from '../../components/CartProductItem'
import products from '../../data/cart';
import ButtonComp from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartScreen = () => {

    const nav = useNavigation();

    const totalPrice = products.reduce((sumedVlaue, product) => (
        sumedVlaue + (product.item.price * product.quantity)
    ), 0)
    // eslint-disable-next-line react/no-unstable-nested-components
    const ListHeaderComponent = () => {
        // eslint-disable-next-line react-native/no-inline-styles
        return (

            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>SubTotal({products.length} items):
                    <Text style={{ color: '#e47911' }}> ${totalPrice.toFixed(2)}</Text>
                </Text>
                <ButtonComp
                    label="Proceed to checkout"
                    onPress={() => { nav.navigate('Address'); }}
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyles={{
                        backgroundColor: '#f7e300',
                    }} textStyle={{ undefined }} />

                <View>
                    <Text>Add a gift for easy returns</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: 5}}>

                <FlatList
                    data={products}
                    renderItem={({ item }) => <CartProductItem cartItem={item
                    } />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={ListHeaderComponent}

                // ListFooterComponent={()=>(
                //     <View>
                //         <Text>Footer text Content</Text>
                //     </View>
                // )}
                />
            </View>
        </SafeAreaView>
    )
};


export default ShoppingCartScreen;
