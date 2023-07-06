import { Container, Text, View, Pressable } from "native-base";
import { Image } from "react-native";
import axios from "axios";
import { StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react'
import { Weather } from "./Weather";

export const Heading = props => {
    const [user, setUser] = useState('')

    const { menu } = props;

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            //   return jsonValue != null ? JSON.parse(jsonValue) : null;
            if (jsonValue != null) {
                //   console.log("JSON")
                //   console.log(JSON.parse(jsonValue))
                setUser(JSON.parse(jsonValue).data)
                // console.log("USER")
                // console.log(user)
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <Container style={styles.container} >
            <Pressable
                style={styles.photoContainer}
                onPress={menu}
            >
                <Image
                    source={require("../../../assets/images/ImageHolderMain.png")}
                    alt="Image Holder"
                    style={styles.profilePhoto}
                />
            </Pressable>
            <View style={styles.headingContent}>
                <Text
                    style={styles.heading}
                >
                    Hello {user != undefined ? user.name : "Marina"}!
                </Text>
                <Text
                    style={styles.text}
                >
                    It's sunny outside.
                </Text>
                <Weather />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    profilePhoto: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    container: {
        // backgroundColor: "lightgray",
        width: "100%",
        padding: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50
    },
    headingContent: {
        padding: 10
    },
    photoContainer: {
        backgroundColor: "white",
        width: 80,
        height: 80,
        borderRadius: 50,
        padding: 10
    },
    heading: {
        fontSize: "20px",
        fontWeight: "bold"
    }
})