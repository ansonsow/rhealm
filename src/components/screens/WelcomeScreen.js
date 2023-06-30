import { Container, Text, Button, View } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { OAUTH_CLIENT_ID_ANDROID, OAUTH_CLIENT_ID_IOS, OAUTH_CLIENT_ID, EXPO_CLIENT_ID, BACKEND } from "@env";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

export const WelcomeScreen = () => {

    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: OAUTH_CLIENT_ID_ANDROID,
        iosClientId: OAUTH_CLIENT_ID_IOS,
        webClientId: OAUTH_CLIENT_ID,
        expoClientId: EXPO_CLIENT_ID
    });

    useEffect(() => {
        handleWebSignIn();
    }, [response]);

    const handleWebSignIn = async () => {
        const user = await AsyncStorage.getItem("@user");

        if (!user) {
            if (response?.type === "success") {
                await getUserInfo(response.authentication.accessToken);
            }
        } else {
            setUserInfo(JSON.parse(user));
        }
    }

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me", {
                headers: { Authorization: `Bearer ${token}` },
            })
            const user = await response.json();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            setUserInfo(user);

            // Add to the db
            axios.post(`${BACKEND}/register/oauth`, {
                name: user.name,
                email: user.email,
                profilePhoto: user.picture
            }).then((res) => {
                console.log("Res: ", res.data);
                navigation.navigate("Instruction");
            })

        } catch (error) {
            console.log(error);
        }
    }


    const simpleSignUp = () => {
        console.log("First Screen Working");
        navigation.navigate("SignUp");
    }

    const fbSignUp = () => {
        console.log("FB Working")
    }

    const clearData = async () => {
        try {
            await AsyncStorage.removeItem("@user");
            console.log("Data cleared")
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <Container>
            <Text style={styles.heading} >Welcome to ColourFit</Text>
            <Text>
                {JSON.stringify(userInfo, null, 2)}
            </Text>
            <Button
                style={styles.btn}
                onPress={simpleSignUp}
            >
                Sign up with email
            </Button>
            <View
                style={styles.lines}
            >
                <View
                    style={styles.line}
                />
                <Text
                    style={styles.lineText}
                    alignSelf="center"
                >
                    or
                </Text>
                <View
                    style={styles.line}
                />
            </View>
            <Button
                style={styles.btn}
                onPress={() => promptAsync()}
            >
                Google
            </Button>
            <Button
                style={styles.btn}
                onPress={fbSignUp}
            >
                Facebook
            </Button>
            <Button
                onPress={clearData}
            >
                Clear Data
            </Button>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
    btn: {
        marginTop: 10,
        width: 250
    },
    lines: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center"
    },
    line: {
        borderBottomWidth: 1,
        width: 100
    },
    lineText: {
        fontSize: 16,
        marginTop: 20
    }
})