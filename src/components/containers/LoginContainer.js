import { Container, Text } from "native-base";
import { LoginForm } from "../forms/LoginForm";
import { useState } from "react";
import { BACKEND } from "@env";
import axios from "axios";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

    const login = () => {
        if (email === "" && password === "") {
            setError("Credentials don't match, please check your credentials");
        } else {
            axios.post(`${BACKEND}/login`, {
                email: email,
                password: password
            }).then((res) => {
                console.log("Res: ", res);
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

    return (
        <Container>
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
