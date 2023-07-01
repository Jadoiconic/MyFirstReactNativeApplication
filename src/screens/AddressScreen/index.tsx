/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list'
import styles from './styles';

const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    console.log(fullName);
    return (
        <View style={styles.root}>
            <Picker
                selectedValue={country}
                onValueChange={itemVlaue => setCountry(itemVlaue)}>
                {countries.map((country: { code: any; name: string | undefined }) => (
                    <Picker.Item value={country.code} label={country.name} />
                ))}
            </Picker>
            {/* Full Name */}
            <View style={styles.row}>
                <Text style={styles.title}>Full Name(First and Last name)</Text>
                <TextInput
                    placeholder='Full Name'
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            {/* Phone Number */}
            <View style={styles.row}>
                <Text style={styles.title}>Phone Number</Text>
                <TextInput
                    placeholder='Phone Number'
                    style={styles.input}
                    value={phone}
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                />
            </View>
            {/* Address */}
            <View style={styles.row}>
                <Text style={styles.title}>Address</Text>
                <TextInput
                    placeholder='Street Address PO Box'
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />
                <TextInput
                    placeholder='Apt, USA, Kigali'
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

             {/* City */}
             <View style={styles.row}>
                <Text style={styles.title}>City</Text>
                <TextInput
                    style={styles.input}
                    value={city}
                    keyboardType="phone-pad"
                    onChangeText={setCity}
                />
            </View>
        </View>
    );
};

export default AddressScreen;

