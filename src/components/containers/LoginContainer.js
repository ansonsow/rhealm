import { Button, Container, Text, Image, View, Center, Box } from "native-base";
import { LoginForm } from "../forms/LoginForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgXml } from "react-native-svg";
import { svgLogo } from "../../../assets/images/svgs";

import { CameraContainer } from "../containers/CameraContainer"

import { OAUTH_CLIENT_ID_ANDROID, OAUTH_CLIENT_ID_IOS, OAUTH_CLIENT_ID, EXPO_CLIENT_ID, BACKEND } from "@env";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export const LoginContainer = () => {


    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // const [userInfo, setUserInfo] = useState(null);

    const handleEmailChange = (email) => {
        setEmail(email);
        setError("");
    }

    const handlePswChange = (password) => {
        setPassword(password);
        setError("");
    }
    // console.log(BACKEND)

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const login = () => {
        if (email === "" || password === "") {
            setError("Please check your email or password.");
        } else {
            axios.post(`${BACKEND}/login`, {
                email: email,
                password: password
            }).then((res) => {
                // console.log("Res: ", res);
                storeData(res.data)
                navigation.navigate("Main");
            })
        }
    }

    const forgotPsw = () => {
        // console.log("Forgot Password Clicked!")
        navigation.navigate("ForgotPsw");
    }

    const signUp = () => {
        // console.log("Sign Up Clicked!")
        navigation.navigate("Index");
    }

    // const goColourMatch = () => {
    //     // console.log("Sign Up Clicked!")
    //     navigation.navigate("ColourMatch");
    // }


    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     androidClientId: OAUTH_CLIENT_ID_ANDROID,
    //     iosClientId: OAUTH_CLIENT_ID_IOS,
    //     webClientId: OAUTH_CLIENT_ID,
    //     expoClientId: EXPO_CLIENT_ID
    // });

    // useEffect(() => {
    //     handleWebSignIn();
    // }, [response]);

    // const handleWebSignIn = async () => {
    //     const user = await AsyncStorage.getItem("@user");

    //     if (!user) {
    //         if (response?.type === "success") {
    //             await getUserInfo(response.authentication.accessToken);
    //         }
    //     } else {
    //         setUserInfo(JSON.parse(user));
    //     }
    // }

    // const getUserInfo = async (token) => {
    //     if (!token) return;
    //     try {
    //         const response = await fetch(
    //             "https://www.googleapis.com/userinfo/v2/me", {
    //             headers: { Authorization: `Bearer ${token}` },
    //         })
    //         const user = await response.json();
    //         await AsyncStorage.setItem("@user", JSON.stringify(user));
    //         setUserInfo(user);

    //         // Add to the db
    //         axios.post(`${BACKEND}/register/oauth`, {
    //             name: user.name,
    //             email: user.email,
    //             profilePhoto: user.picture
    //         }).then((res) => {
    //             console.log("Res: ", res.data);
    //             navigation.navigate("Instruction");
    //         })

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }





    // const loginGoogle = () => {
    //     axios.post(`${BACKEND}/login/oauth`, {
    //         email: email
    //     }).then((res) => {
    //         // console.log("Res: ", res);
    //         storeData(res.data)
    //         navigation.navigate("Main");
    //     })
    // }

    return (
        <Center>
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

            <View>

            </View>

            <LoginForm
                onEmailChange={handleEmailChange}
                onPswChange={handlePswChange}
                onSubmit={login}
                forgotPsw={forgotPsw}
                error={error}
            />
            {/* <Text
                onPress={goColourMatch}
            >
                Check Colours
            </Text> */}

            <View
                style={styles.lines}
            >
                <View
                    style={styles.line}
                />
                <Text
                    style={styles.lineText}
                >
                    or sign in with
                </Text>
                <View
                    style={styles.line}
                />
            </View>

            <Button
                onPress={() => promptAsync()}
            >
                Google
            </Button>
            <View style={styles.oneLiner}>
                <Text
                    style={styles.addText}
                >
                    Don't have an account?&nbsp;
                    <Text
                        onPress={signUp}
                        style={styles.pressable}
                    >
                        Sign up!
                    </Text>
                </Text>
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
        // fontFamily: "indivisible-semibold",
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

    // LINES
    lines: {
        display: "flex",
        flexDirection: "row",
        // alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center",
    },
    line: {
        borderBottomWidth: 1,
        width: 90,
        borderColor: "#969AA8",
        // flex: 1
        marginHorizontal: 10,
        // marginTop: 20
    },
    lineText: {
        fontSize: 12,
        // marginTop: 20,
        alignSelf: "center",
        color: "#969AA8",
    },

    // TEXT LINE - different from other texts
    addText: {
        color: "#515151"
    },
    oneLiner: {
        alignItems: "center",
        paddingTop: 15
    },

    // PRESSABLE TEXT
    pressable: {
        color: "#411E94",
        fontWeight: "bold"
    },
})
