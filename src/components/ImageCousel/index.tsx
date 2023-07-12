/* eslint-disable no-extra-semi */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import { FlatList, Image, StyleSheet,  View, useWindowDimensions } from 'react-native'
import React, { useCallback, useState } from 'react'

interface imageProps{
    image:string[];
  };

const ImageCousel = ({ image }:imageProps) => {
  const windowWith = useWindowDimensions().width;
  const [selectedIndex,setSelectedIndex] = useState(0)

  const onViewableItemsChangedHandler = useCallback(
    ({viewableItems}:any) => {
      if (viewableItems && viewableItems.length !== 0) {
        setSelectedIndex(viewableItems[0].index);
      }
    },[],
  );
  return (
    <View>
      <FlatList 
      data={image}
      horizontal
      renderItem={({item})=><Image source={{ uri: item}} style={[styles.image,{width:windowWith-40}]} />} 
      showsHorizontalScrollIndicator={false}
      snapToInterval={windowWith-20}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      keyExtractor={(item)=>item}
      viewabilityConfig={
        {
          viewAreaCoveragePercentThreshold:50,
        }
      }
      onViewableItemsChanged={onViewableItemsChangedHandler}
      />
      <View style={styles.dots}>
      {image.map((image,index)=>(
        <View key={image}
        style={[styles.dot,{backgroundColor:index === selectedIndex?'#6b6b6b':'#dedede'}]} />
       ))}
      </View>
    </View>
  );
};

export default ImageCousel;

const styles = StyleSheet.create({
    image:{
        height:250,
        resizeMode:'contain',
        margin:10,

    },dot:{
      width:15,
      height:15,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#dedede',
      margin:5,
    },dots:{
      flexDirection:'row',
      justifyContent:'center',
    },
});

