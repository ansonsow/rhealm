import { Center, Text, Pressable, View, ScrollView } from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { useState } from "react";
import axios from "axios";
import { BACKEND } from "@env";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgConfirmIcon, svgLogo } from "../../../assets/images/svgs";
import { Overlay } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignUpContainer = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPsw, setConfPsw] = useState("");
    const [error, setError] = useState("");
    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);

    const handleNameChange = (name) => {
        setName(name);
    }

    const handleEmailChange = (email) => {
        setEmail(email);
    }

    const handlePswChange = (password) => {
        setPassword(password);
        setError("");
    }

    const handlePswConf = (confPsw) => {
        setConfPsw(confPsw);
        setError("");
    }

    const backToSplash = () => {
        setPopOne(true);
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("user", jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const savePrimary = () => {
        if (password !== confPsw) {
            console.log("Passwords don't match");
            setError("Passwords don't match");
        } else {
            // console.log("Passwords match");
            axios.post(`${BACKEND}/register`, {
                name: name,
                email: email,
                password: password
            }).then((res) => {
                console.log("Res: ", res);
                console.log(res.data);
                // storeData(res.data);
                // axios.get(`${BACKEND}/user/${res.data._id}`)
                //     .then((res) => {
                //         console.log(res);
                //         // storeData(res.config.data);
                //     })
                setPopTwo(true);
            })
        }
    }

    const cancelBtn = () => {
        setPopOne(false);
    }

    const nextBtn = () => {
        navigation.navigate("SignUpTwo");
        setPopTwo(!popTwo);
    }

    const confirmBtn = () => {
        navigation.navigate("Index");
    }

    return (
        <Center>
            <View>
                <SvgXml
                    xml={svgLogo}
                    style={styles.logo}
                />
                <View
                    style={styles.headingCont}
                >
                    <Text
                        style={styles.heading}
                    >
                        Welcome to
                    </Text>
                    <Text
                        style={styles.boldHeading}
                    >
                        Colourfit
                    </Text>
                </View>
                <SignUpForm
                    onNameChange={handleNameChange}
                    onEmailChange={handleEmailChange}
                    onPswChange={handlePswChange}
                    onConfPswChange={handlePswConf}
                    onSubmit={savePrimary}
                    error={error}
                    backToSplash={backToSplash}
                />

                {popOne ? (
                    <Overlay
                        isVisible={popOne}
                    >
                        <View style={styles.popCont}>
                            <Text
                                style={styles.headingPop}
                            >
                                Are you sure?
                            </Text>
                            <Text
                                style={styles.textPop}
                            >
                                Your changes will be lost.
                            </Text>

                            <View
                                style={styles.btnPopCont}
                            >
                                <Pressable
                                    onPress={confirmBtn}
                                    style={styles.btnPopNAction}
                                >
                                    <Text style={styles.btnTextPopNAction}>Leave</Text>
                                </Pressable>
                                <Pressable
                                    onPress={cancelBtn}
                                    style={styles.btnPopPAction}
                                >
                                    <Text style={styles.btnTextPopPAction}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Overlay>
                ) : (console.log("Closed"))}

                {popTwo ? (
                    <Overlay
                        isOpen={popTwo}
                    >
                        <View style={styles.popCont}>
                            <SvgXml
                                xml={svgConfirmIcon}
                                style={styles.svg}
                            />
                            <Text
                                style={styles.textPop}
                            >
                                Your information has been saved.
                            </Text>

                            <View style={styles.btnPopCont}>
                                <Pressable
                                    onPress={nextBtn}
                                    style={styles.btnPopNextAction}
                                >
                                    <Text style={styles.btnTextPopNexAction}>Next</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Overlay>
                ) : (console.log("Closed"))}
            </View>
        </Center>
    )
}

const styles = StyleSheet.create({
    // HEADING LOGO
    heading: {
        fontWeight: "bold",
        fontSize: 24,
        // marginBottom: 20
    },
    boldHeading: {
        fontFamily: "Indivisible-SemiBold",
        fontSize: 36,
        paddingTop: 15
    },
    headingCont: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        gap: 10,
        marginTop: 20,
        marginBottom: 10
    },

    // LOGO
    logo: {
        alignSelf: "center",
        margin: 5
    },

    // POPUP
    headingPop: {
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Indivisible-SemiBold",
    },
    textPop: {
        fontSize: 16,
        paddingTop: 10,
    },
    btnPopNAction: {
        backgroundColor: "transparent",
        width: 100,
        alignItems: "center"
    },
    btnTextPopNAction: {
        fontSize: 14,
    },
    btnPopPAction: {
        backgroundColor: "#D33D12",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopPAction: {
        fontSize: 14,
        color: "#fff",
    },
    btnPopNextAction: {
        // backgroundColor: "#D33D12",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopNexAction: {
        fontSize: 14,
        color: "#fff",
    },
    btnPopCont: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignContent: "flex-end"
    },
    popCont: {
        padding: 20,
        width: 300,
    },

    // SVG - this is necessary to change considering every SVG we need to alter
    svg: {
        color: "#000",
    },
})