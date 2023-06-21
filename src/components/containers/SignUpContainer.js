import { Container, Center, Text, Button } from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { useState } from "react";
import axios from "axios";
import { BACKEND } from "@env";
import { PopUp } from "../layout/PopUp";
import { StyleSheet } from "react-native";

export const SignUpContainer = ({ navigation }) => {

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
        navigation.navigate("Index");
        setPopOne(true);
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
                // setError("");
                // console.log(error)
                setPopTwo(true);
            })
        }
    }

    const cancelBtn = () => {
        setPopOne(false);
    }

    const leaveBtn = () => {
        console.log("Go to Welcome Screen")
    }

    const nextBtn = () => {
        console.log("Go to Profile Photo Set up")
    }

    return (
        <Container>
            <Text
                style={styles.heading}
            >
                Sign Up
            </Text>
            <SignUpForm
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                onPswChange={handlePswChange}
                onConfPswChange={handlePswConf}
                onSubmit={savePrimary}
                error={error}
                backToSplash={backToSplash}
                cancelBtn={cancelBtn}
                leaveBtn={leaveBtn}
            />
            {popOne ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            Are you sure?
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            Your changes will be lost.
                        </Text>
                        <Button
                            onPress={cancelBtn}
                            style={styles.btn}
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={leaveBtn}
                            style={styles.btn}
                        >
                            Leave
                        </Button>
                    </>
                }
            />) : (console.log("Closed"))}
            {popTwo ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            Saved!
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            Your information has been saved.
                        </Text>
                        <Button
                            onPress={nextBtn}
                            style={styles.btn}
                        >
                            Next
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