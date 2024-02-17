import React, {useState} from 'react';
import {Button, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {getWeatherInformation} from "../../apiCalls/getWeatherInformation.ts";


export const Input = ({handleSubmmit}: any) => {
    const [cityName, setCityName] = useState('');


    const handlePress = () => {
        handleSubmmit(cityName)
        setCityName('')
    }

    return (
        <View style={styles.constainer}>

            <TextInput
                onChangeText={setCityName}
                value={cityName}
                style={styles.input}
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
    constainer: {
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '70%',
        justifyContent: "space-between",
        marginTop:'30%'
    },
    input: {
        fontSize: 18,
        color: '#fff',
    },
});