import { Container, Text, Button, Icon, View, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from "react-native-svg";
import { svgEditIcon } from "../../../assets/images/svgs";
import { svgLeftIcon } from "../../../assets/images/svgs";

export const Profile = props => {

    const [user, setUser] = useState("");

    const { backToMenu, openEdit } = props;

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("user");

            if (jsonValue != null) {
                setUser(JSON.parse(jsonValue).data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(user);

    useEffect(() => {
        getData();
    }, [])

    return (
        <Container style={styles.container}>
            <View style={styles.headingMenuCont}>
                <View style={styles.headingMenu}>
                    <TouchableOpacity
                        onPress={backToMenu}
                    >
                        <SvgXml
                            xml={svgLeftIcon}
                        />
                    </TouchableOpacity>
                    <Text
                        style={styles.heading}
                    >
                        Profile
                    </Text>
                    <TouchableOpacity
                        onPress={openEdit}
                    >
                        <SvgXml
                            xml={svgEditIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text
                style={styles.subheading}
            >
                Name
            </Text>
            <Text
                style={styles.text}
            >
                {user != undefined ? user.name : "User"}
            </Text>
            <Text
                style={styles.subheading}
            >
                Email
            </Text>
            <Text
                style={styles.text}
            >
                {user != undefined ? user.email : "email@gmail.com"}
            </Text>
            {/* <Text
                style={styles.subheading}
            >
                Password
            </Text>
            <Text
                style={styles.text}
            >
                ***********
            </Text> */}
            <Text
                style={styles.subheading}
            >
                Skin Tone
            </Text>
            <Text
                style={styles.text}
            >
                Tan (skin tone and image)
            </Text>
            <Text
                style={styles.subheading}
            >
                Hair Colour
            </Text>
            <Text
                style={styles.text}
            >
                Brown (hair colour and image)
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10
    },
    headingMenuCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    subheading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 15
    },
    text: {
        fontSize: 16,
        paddingTop: 15
    },
    container: {
        width: "100%"
    }
})