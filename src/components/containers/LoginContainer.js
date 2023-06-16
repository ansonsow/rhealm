import { Container, Text } from "native-base";
import { LoginForm } from "../forms/LoginForm";
import { useState } from "react";
import { BACKEND } from "@env";

export const LoginContainer = () => {

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
        setError("Credentials don't match, please check your credentials");
    }

    const forgotPsw = () => {
        console.log("Forgot Password Clicked!")
    }

    const signUp = () => {
        console.log("Sign Up Clicked!")
    }

    return (
        <Container>
            <Text
                fontWeight="bold"
                fontSize={20}
                marginBottom={20}
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
