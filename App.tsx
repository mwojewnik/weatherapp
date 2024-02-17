import React, {useState} from 'react';
import {Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View,} from 'react-native';
import {Input} from "./src/ui/atoms/Input.tsx";
import {getWeatherInformation} from "./src/apiCalls/getWeatherInformation.ts";
import {InformationSection} from "./src/ui/atoms/InformationSection.tsx";


const App = () => {
    const [weatherInf, setWeatherInf] = useState(null);
    const [error, setError] = useState(null)


    console.log('getWeatherInformation API | json =', JSON.stringify(weatherInf, null, 2));
    const handleSubmit = async (cityName: string) => {
        const weather = await getWeatherInformation(cityName)
        setWeatherInf(null)
        setError(null)

        if (weather.cod === 200) {
            setWeatherInf(weather)
        } else {
            setError(weather.message)
        }
    }


    return (
        <ImageBackground style={styles.backgroundImage}
                         source={require('./src/assets/images/background.jpeg')}>
            <SafeAreaView style={{position: 'relative'}}>
                <View style={styles.container}>


                    <InformationSection weatherInf={weatherInf}/>

                    <Input handleSubmmit={handleSubmit}/>
                    <Text style={{color: 'red', marginTop: 5}}>{error}</Text>


                </View>
            </SafeAreaView>
        </ImageBackground>


    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        paddingTop: 40,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    temperature: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: '15%',
    }
});

export default App;