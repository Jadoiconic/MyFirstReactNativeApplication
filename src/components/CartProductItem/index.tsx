/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
    cartItem:{
        id:string;
        quantity:number;
        option?:string;
        item:{
            id:string;
            title:string;
            image:string;
            avgRating:number;
            price:number;
            oldPrice?:number;
            ratings:number;
        }
    }
}


const CartProductItem = ({ cartItem }:CartProductItemProps) => {
    const {quantity:quantityProp,item} = cartItem;
    const [quantity,sertQuantity] = useState(quantityProp);

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={{ uri: item.image}} />
                <View style={styles.right}>
                    <View>
                        <Text numberOfLines={3} style={styles.title}>
                           {item.title}
                        </Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <View  style={styles.rating}>
                            {[0,0,0,0,0].map((al,i)=>
                                <FontAwesome
                                key={`${item.id}-${i}`}
                                  style={styles.star}
                                   name={i < Math.floor(item.avgRating)? 'star':'star-o'}
                                    size={18}
                                     color="#e47911" />
                                )
                            }
                        
                        </View>
                        <Text>{item.ratings} </Text>
                        </View>
                        <View style={styles.priceContainer}>
                        <Text>from </Text>
                        <Text>$</Text>
                        <Text style={styles.price}>{item.price} </Text>
                        <Text style={styles.oldPrice}>{item.oldPrice ? item.oldPrice:""}</Text>
                        
                        </View>
                    </View>
                    
            </View>
            <View style={styles.qtycontainer}>
            <QuantitySelector quantity={quantity} setQuantity={sertQuantity} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
    mainContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '100%',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    oldPrice:{
        fontSize:12,
    },
    price: {
        fontWeight: 'bold',
        fontSize:18,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    right: {
        padding: 10,
        flex: 3,
    },
    rating: {
        flexDirection: 'row',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:5,
    },
    title: {
        fontSize: 18,
    },
    star:{
        margin:2,
    },qtycontainer:{
        marginVertical:10,
        marginLeft:5,
    },
})

export default CartProductItem;
