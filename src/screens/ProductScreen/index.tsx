/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import product from '../../data/product'
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import ButtonComp from '../../components/Button';
import ImageCousel from '../../components/ImageCousel';



const ProductScreen = () => {
    const [selectedValue, setSelectedValue] = useState(product.options[0] ? product.options[0] : null);

    return (
        <View>
            <ScrollView>
            <Text numberOfLines={2} style={styles.title}>{product.title}</Text>
            <ImageCousel image={product.images}/>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) =>
                    setSelectedValue(itemValue)
                }>
                {product.options.map((data) => <Picker.Item key={data} label={data} value={data} />)}
            </Picker>

            <View style={styles.priceContainer}>
                <Text>from </Text>
                <Text>$</Text>
                <Text style={styles.price}>{product.price} </Text>
                <Text style={styles.oldPrice}>{product.oldPrice ? product.oldPrice : ""}</Text>
            </View>
            <Text style={styles.description}>{product.description} </Text>
            <QuantitySelector />
            <View>
                <ButtonComp label='Add to Cart' onPress={() => { } } containerStyles={{ backgroundColor: '#e3c905' }} textStyle={({undefined})} />
                <ButtonComp label='Buy Now' onPress={() => { } } containerStyles={{ backgroundColor: '#e47900' }} textStyle={{undefined}}/>
            </View>
            </ScrollView>
        </View>
    ) 
}

export default ProductScreen