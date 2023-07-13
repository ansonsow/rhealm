import { Container, Text, View, Pressable, Center } from "native-base";
import { Image, TouchableOpacity } from "react-native";
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
        <View>
            {/* <Center> */}
            <View style={styles.headingCont}>
                <TouchableOpacity
                    style={styles.photoContainer}
                    onPress={menu}
                >
                    <View style={styles.photoCircle}>

                        {user.profilePhoto ?
                            (<Image
                                source={{ uri: `${user.profilePhoto}` }}
                                alt="Image Holder"
                                style={styles.profilePhoto}
                            />)
                            :
                            (<Image
                                source={require("../../../assets/images/ImageHolderMain.png")}
                                alt="Image Holder"
                                style={styles.profilePhoto}
                            />)
                        }

                    </View>
                </TouchableOpacity>
                <View style={styles.headingContent}>
                    <Text
                        style={styles.heading}
                    >
                        Hello {user != undefined ? user.name : "User"}!
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        It's sunny outside.
                    </Text>
                    <Weather />
                </View>
            </View>
            {/* </Center> */}
        </View>
    )
}

const styles = StyleSheet.create({
    // HEADING MENU
    headingCont: {
        backgroundColor: "lightgray",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    photoContainer: {
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 50,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    photoCircle: {
        backgroundColor: "#000",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    profilePhoto: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    headingContent: {
        padding: 10,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center"
        // alignItems: "center"
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold"
    }
})