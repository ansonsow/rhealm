import { Container, Text, Button, View, Center, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgLogo } from "../../../assets/images/svgs";

import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OAUTH_CLIENT_ID_IOS, OAUTH_CLIENT_ID_ANDROID, EXPO_CLIENT_ID, BACKEND } from "@env";
import axios from "axios";
import { signOut } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export const WelcomeScreen = () => {
    const navigation = useNavigation();

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: `${OAUTH_CLIENT_ID_IOS}`,
        androidClientId: `${OAUTH_CLIENT_ID_ANDROID}`,
        expoClientId: `${EXPO_CLIENT_ID}`
    });

    // Saving the user in the Firebase
    useEffect(() => {
        if (response?.type == "success") {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Store the user in the db
                const { displayName } = user;
                const { email } = user;
                const { photoURL } = user;

                axios.post(`${BACKEND}/register/oauth`, {
                    name: displayName,
                    email: email,
                    profilePhoto: photoURL
                })
                    .then(async (res) => {
                        console.log("Res: ", res);
                        storeData(res.data);
                        await AsyncStorage.setItem("user", JSON.stringify(user));
                        navigation.navigate("Instruction");
                    })
                    .catch((error) => {
                        console.log("E: ", error);
                    })
            } else {
                console.log("User was logged out");
            }
        })
        return () => unsub();
    }, []);

    const simpleSignUp = () => {
        console.log("First Screen Working");
        navigation.navigate("SignUp");
    }

    const fbSignUp = () => {
        console.log("For now will be a signout button");
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

                <Pressable
                    onPress={simpleSignUp}
                >
                    <Text style={styles.btnText}>Sign up with email</Text>
                </Pressable>

                <View
                    style={styles.lines}
                >
                    <View
                        style={styles.line}
                    />
                    <Text
                        style={styles.lineText}
                    >
                        or connect with
                    </Text>
                    <View
                        style={styles.line}
                    />
                </View>

                <Pressable
                    // onPress={googleSignUp}
                    onPress={() => promptAsync()}
                    style={styles.googleBtn}
                >
                    <Text style={styles.btnText}>Google</Text>
                </Pressable>

                <Pressable
                    // onPress={fbSignUp}
                    onPress={async () => await signOut(auth)}
                >
                    <Text style={styles.btnText}>Facebook</Text>
                </Pressable>
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

    // BTN
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },

    // LINES
    lines: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        // marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        borderBottomWidth: 1,
        width: 90,
        borderColor: "#969AA8",
        // flex: 1
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20
    },
    lineText: {
        fontSize: 12,
        marginTop: 20,
        alignSelf: "center",
        color: "#969AA8",
    },

    // BTNS
    googleBtn: {
        backgroundColor: "#D33D12"
    }
})