/* eslint-disable prettier/prettier */
import { StyleSheet, TextInput, View,TouchableOpacity } from 'react-native';
import React from 'react';

import FontAwesame from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const SearchBox = () => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.SearchBox}>
        {/* <TouchableOpacity onPress={()=>navigation.goBack()}>
        <FontAwesame name="arrow-left" color="black" size={30} />
        </TouchableOpacity> */}
        <View style={styles.mainComponent}>
          <FontAwesame name="search" color="gray" size={26} />
          <TextInput
            placeholder="Search..."
            style={styles.input}
            placeholderTextColor="gray"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#48a3c6',
  },
  SearchBox: {
    marginTop: 39,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 20,
  },
  mainComponent: {
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: 5,
    width:'100%',
  },
});