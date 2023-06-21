import { Container, Text, Button } from "native-base";
import { ForgotPswForm } from "../forms/ForgotPswForm";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { PopUp } from "../layout/PopUp";

export const ForgotPswContainer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [pop, setPop] = useState(false);

    const handleNameChange = (name) => {
        setName(name);
        setError("");
    }

    const handleEmailChange = (email) => {
        setEmail(email);
        setError("");
    }

    const onSubmit = () => {
        setPop(true)
        setError("Credentials don't match, please check your credentials")

    }

    const backToLogin = () => {
        console.log("Back to Login Clicked!");
    }

    const backToLoginPop = () => {
        // console.log("Back to Login Working");
        setPop(false);
    }

    return (
        <Container>
            <Text
                style={styles.heading}
            >
                Forgot Password?
            </Text>
            <ForgotPswForm
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                onSubmit={onSubmit}
                error={error}
                login={backToLogin}
            />
            {pop ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            Password Sent
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            New password has been sent to your email.
                            Please check the email to retrieve your password.
                        </Text>
                        <Button
                            onPress={backToLoginPop}
                            style={styles.btn}
                        >
                            Back to Login Page
                        </Button>

                    </>
                }
            />) : (console.log("Closed"))}
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20
    },
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
    }
})