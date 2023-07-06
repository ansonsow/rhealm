import { Container, Image, Text, View } from "native-base";
import axios from "axios";
import { WEATHER_API_ACCESS_KEY } from "@env";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export const Weather = () => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${WEATHER_API_ACCESS_KEY}&units=metric`)
            .then(response => {
                // console.log(response);
                setWeather(response);
            })
            .catch(error => {
                console.log(error);
            })
        // axios.get(`http://api.weatherstack.com/current?access_key=${WEATHER_SECOND_API_ACCESS_KEY}&query=Vancouver&units=m`)
        //     .then((response) => {
        //         const data = response.data;
        //         setWeather(data.current);
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }, []);

    // console.log(weather);

    return (
        <Container style={styles.container}>
            {/* {weather &&
                <>
                    <Image
                        alt="Weather Icon"
                        source={{ uri: weather.weather_icons[0] }}
                        style={styles.icon}
                    />
                    <Text>
                        {weather.temperature}&deg;C
                    </Text>
                    <Text>
                        {weather.weather_descriptions[0]}
                    </Text>
                </>
            } */}
            {weather &&
                <>
                    <View
                        style={styles.imageCont}
                    >
                        <Image
                            alt="Weather Icon"
                            source={{ uri: `https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png` }}
                            style={styles.icon}
                        />
                    </View>
                    <Text>
                        {Math.round(weather.data.main.temp)}&deg;C
                    </Text>
                    <Text>
                        {weather.data.weather[0].main}
                    </Text>
                </>
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 3,
        backgroundColor: "lightgray",
        borderRadius: "15px",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 1
        },
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30
    },
    imageCont: {
        // width: 30,
        // height: 30,
        // borderRadius: "50%",
        // backgroundColor: "gray"
    }
})