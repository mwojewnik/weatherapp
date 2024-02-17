import React, {useState} from 'react';
import {Platform, StyleSheet, TextInput, View} from "react-native";



interface InputProps {
    handleSubmmit: (cityName: string) => void;
}

export const Input = ({handleSubmmit}: InputProps) => {
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