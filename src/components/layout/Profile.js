import { Container, Text, View, Image, Center, Box } from "native-base";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
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
        <Center padding={5}>
            <SafeAreaView style={styles.container}>
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
                <View style={styles.photoContainer}>
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
                    <Text style={styles.counting}>{user.name}</Text>
                    <View style={styles.countingCont}>
                        <View style={styles.countingItemCont}>
                            <Text style={styles.counting}>Closet Count</Text>
                            <Text style={styles.countingText}>Closets</Text>
                        </View>
                        <View style={styles.countingItemCont}>
                            <Text style={styles.counting}>Item Count</Text>
                            <Text style={styles.countingText}>Items</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.profileItem}>
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
                    <View
                        style={styles.line}
                    />
                </View>
                <View style={styles.profileItem}>
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
                    <View
                        style={styles.line}
                    />
                </View>
                <View style={styles.profileItem}>
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
                    <View
                        style={styles.line}
                    />
                </View>
                <View style={styles.profileItem}>
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
                </View>

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

            </SafeAreaView>
        </Center>
    )
}

const styles = StyleSheet.create({
    // PROFILE HEADING
    container: {
        width: "100%",
        height: "100%"
    },
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // alignContent: "space-between",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 10
    },

    // PROFILE INFO
    profileItem: {
        paddingTop: 10,
    },
    subheading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 15
    },
    text: {
        fontSize: 16,
        paddingTop: 10,
        color: "#77757E"
    },
    profileCont: {
        backgroundColor: "#F7F7F7",
        padding: 10,
    },

    // LINES
    line: {
        borderBottomWidth: 1,
        width: "100%",
        borderColor: "#E9E9E9",
        // flex: 1
        // marginLeft: 5,
        // marginRight: 5,
        paddingTop: 5
    },

    // PHOTO CONTAINER
    photoContainer: {
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 50,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
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

    // COUNTING
    countingCont: {
        display: "flex",
        flexDirection: "row",
        // padding: 10
    },
    countingItemCont: {

    },
    counting: {
        fontSize: 20,
        fontWeight: "bold"
    },
    countingText: {
        color: "#77757E",
        fontSize: 14
    }
})