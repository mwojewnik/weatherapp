import React, {useState} from 'react';
import {Button, Image, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {getWeatherInformation} from "../../apiCalls/getWeatherInformation.ts";


export const Input = ({handleSubmmit}: any) => {
    const [cityName, setCityName] = useState('');


    const handlePress = () => {
        handleSubmmit(cityName)
        setCityName('')
    }

    return (
        <View style={[styles.container, {paddingVertical: Platform.OS === 'ios' ? 10 : 0}]}>

            <TextInput
                onChangeText={setCityName}
                onSubmitEditing={handlePress}
                value={cityName}
                style={[styles.input]}
                placeholderTextColor='#fff'
                placeholder='Nazwa miasta...'/>

            {cityName.length >= 2 &&
                <TouchableOpacity onPress={handlePress}>
                    <Text style={{color: '#fff'}}>go</Text>
                </TouchableOpacity>
            }
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        width: '70%',
        justifyContent: "space-between",
        alignItems: 'center'

    },
    input: {
        fontSize: 18,
        color: '#fff',
    },
});