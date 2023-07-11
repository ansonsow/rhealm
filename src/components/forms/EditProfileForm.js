import { AntDesign } from "@expo/vector-icons";
import { Container, FormControl, VStack, View, Icon, Text, HStack, Input, Button, WarningOutlineIcon } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from "react-native-svg";
import { svgConfirmIcon, svgLeftIcon } from "../../../assets/images/svgs";

export const EditProfileForm = props => {

    const { backToMenu, error, deleteAccount, confirmChanges, onNameChange, onEmailChange } = props;

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
                        {/* <Icon
                        as={<AntDesign name="left" size={30} />}
                        onPress={backToMenu}
                    /> */}
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
                            placeholder={user != undefined ? user.name : "Name"}
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
                        // style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <Text color="red.500">{error}</Text>
                <Text
                    onPress={deleteAccount}
                    style={styles.delete}
                >
                    Delete Account
                </Text>
            </VStack>
        </Container>
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
    }
})