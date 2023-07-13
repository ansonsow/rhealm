import { Container, FormControl, VStack, View, Text, HStack, Input, Image } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from "react-native-svg";
import { svgConfirmIcon, svgLeftIcon, svgAlertIcon } from "../../../assets/images/svgs";

export const EditProfileForm = props => {

    const { backToMenu, errorMsg, deleteAccount, confirmChanges, onNameChange, onEmailChange } = props;

    const [user, setUser] = useState("");

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("user");

            if (jsonValue != null) {
                setUser(JSON.parse(jsonValue).data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(user);

    return (
        <Container>
            <VStack style={styles.container}>
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
                    </View>
                    <TouchableOpacity
                        onPress={confirmChanges}
                    >
                        <SvgXml
                            xml={svgConfirmIcon}
                            style={styles.svg}
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
                {errorMsg &&
                    <View style={styles.alert}>
                        <SvgXml
                            xml={svgAlertIcon}
                        />
                        <Text color="#942100">{errorMsg}</Text>
                    </View>}
                <FormControl>
                    <FormControl.Label>
                        Name
                    </FormControl.Label>
                    <HStack
                    // style={styles.subcontainer}
                    // width="100%"
                    >
                        <Input
                            // placeholder="Name"
                            // style={styles.input}
                            placeholder={user != undefined ? user.name : "user"}
                            variant="underlined"
                            onChangeText={value => {
                                onNameChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Email
                    </FormControl.Label>
                    <HStack
                    // style={styles.subcontainer}
                    // width="100%"
                    >
                        <Input
                            // style={styles.input}
                            placeholder={user != undefined ? user.email : "email@gmail.com"}
                            variant="underlined"
                            onChangeText={value => {
                                onEmailChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Password
                    </FormControl.Label>
                    <HStack
                    // style={styles.subcontainer}
                    >
                        <Input
                            placeholder="Password"
                            variant="underlined"
                        // style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Skin Tone
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Skin Tone"
                            variant="underlined"
                        // style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Hair Colour
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Hair Colour"
                            variant="underlined"
                        // style={styles.input}
                        />
                    </HStack>
                </FormControl>
                {/* <Text color="red.500">{error}</Text> */}
                <Text
                    onPress={deleteAccount}
                    style={styles.delete}
                >
                    Delete Account
                </Text>
            </VStack>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    subcontainer: {
        width: "100%",
    },
    headingMenuCont: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between"
    },
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 10
    },
    // input: {
    //     width: "100%",
    //     marginBottom: 5
    // },
    headingPop: {
        fontWeight: "bold",
        fontSize: 20
    },
    text: {
        fontSize: 16
    },
    btn: {
        marginTop: 10,
        width: 250
    },

    // SVG - this is necessary to change considering every SVG we need to alter
    svg: {
        color: "#000"
    },

    // DELETE ACCOUNT
    delete: {
        color: "#D33D12",
        fontSize: 12,
        textDecorationLine: "underline"
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