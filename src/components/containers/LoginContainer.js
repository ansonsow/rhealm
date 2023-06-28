import { Container, Text } from "native-base";
import { LoginForm } from "../forms/LoginForm";
import { useState } from "react";
import { BACKEND } from "@env";
import axios from "axios";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CameraContainer } from "../containers/CameraContainer"


export const LoginContainer = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
        if (email === "" && password === "") {
            setError("Credentials don't match, please check your credentials");
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

    const goColourMatch = () => {
        // console.log("Sign Up Clicked!")
        navigation.navigate("ColourMatch");
    }

    return (
        <Container>
            {/* <CameraContainer/> */}
            <Text
                style={styles.heading}
            >
                Login
            </Text>
            <LoginForm
                onEmailChange={handleEmailChange}
                onPswChange={handlePswChange}
                onSubmit={login}
                forgotPsw={forgotPsw}
                error={error}
            />
            <Text
                onPress={signUp}
            >
                Don't have an account? Sign up!
            </Text>
            <Text
                onPress={goColourMatch}
            >
                Check Colours
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20
    }
})
