export const getWeatherInformation = async (cityName: string) => {
    console.log('getWeatherInformation API | city name =', cityName);

    const apiKey = '82c1fea2c8ee4590b57ec2aa66308682'

    if(cityName){
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`

            const response = await fetch(url)
            const json = await response.json()
            //console.log('getWeatherInformation API | json =', JSON.stringify(json,null,2));

            return json

        }catch (error){
            console.error('getWeatherInformation API | error =', error);
        }
    }
}