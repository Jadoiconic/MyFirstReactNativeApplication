/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Alert, ScrollView, Text, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import ButtonComp from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const onCheckout = (): void => {
        if (!fullName) {
            Alert.alert('Please fill Full name Field');
            return;
        }
        Alert.alert('Send to check out');
    };
    const validatePhone = (): void => {
        if (phone == '') {
            setPhoneError('You must fill this field!');
            return;
        }
        if (phone.length < 10 || phone.length > 13) {
            setPhoneError('Invalid Phone number!');
            return;
        }
        Alert.alert(`${phone.length}`);
    };


    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}>
            <ScrollView style={styles.root}>
                <Picker
                    selectedValue={country}
                    onValueChange={itemVlaue => setCountry(itemVlaue)}
                    >
                    {countries.map((country: { code: any; name: string | undefined }) => (
                        <Picker.Item key={country.code} value={country.code} label={country.name} />
                    ))}
                </Picker>
                {/* Full Name */}
                <View style={styles.row}>
                    <Text style={styles.title}>Full Name (First and Last name)</Text>
                    <TextInput
                        placeholder="Full Name"
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
                        onEndEditing={validatePhone}
                        onChangeText={(text) => { setPhone(text); setPhoneError(''); }}
                    />
                    {phoneError && <Text style={{ color: 'red' }}>{phoneError}</Text>}
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
                        onChangeText={() => { setCity; }}
                    />
                </View>
                <ButtonComp
                    label='Checkout'
                    onPress={onCheckout}
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyles={{ backgroundColor: '#f7e300' }}
                    textStyle={{undefined}} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddressScreen;

