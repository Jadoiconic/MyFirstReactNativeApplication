/* eslint-disable prettier/prettier */
import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

import FontAwesame from 'react-native-vector-icons/Feather';


const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBox}>
        <FontAwesame name="search" color="gray" size={26} />
        <TextInput
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor="gray"
        />
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
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent:'center',
    paddingHorizontal:5,
    alignItems:'center',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize:20,
  },
});