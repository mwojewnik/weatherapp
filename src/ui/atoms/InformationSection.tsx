import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export const InformationSection = ({weatherInf}: any) => {
    const icon = weatherInf?.weather[0].icon

    const formatTemperature = (temp: number) => {
        return Math.round(temp)
    }


    if (weatherInf) {
        return (
            <View style={[styles.container]}>
                <Text style={styles.temperature}>{formatTemperature(weatherInf?.main?.temp)}°</Text>
                <Image style={styles.image}
                       src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                <View style={styles.infContainer}>
                    <Text style={styles.whiteFont}>Odczuwalna temperatura </Text>
                    <Text
                        style={[styles.whiteFont, {fontWeight: '700'}]}> {formatTemperature(weatherInf?.main?.feels_like)} °</Text>
                    <Text style={[styles.whiteFont, {marginTop: 15}]}>Ciśnienie </Text>
                    <Text style={[styles.whiteFont, {fontWeight: '700'}]}> {weatherInf?.main?.pressure} hPa</Text>
                    <Text style={[styles.whiteFont, {marginTop: 15}]}>Wilgotność </Text>
                    <Text style={[styles.whiteFont, {fontWeight: '700'}]}>{weatherInf?.main?.humidity}%</Text>
                </View>

            </View>
        );
    } else {
        return null
    }
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    image: {
        height: 120, width: 120
    },
    whiteFont: {
        color: '#fff',
    },
    temperature: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: '15%',
    },
    infContainer: {
        alignItems: 'center',
        marginTop: 60
    },
});