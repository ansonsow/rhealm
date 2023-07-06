import { Container, Center, Text, Button } from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { useState } from "react";
import axios from "axios";
import { BACKEND } from "@env";
import { PopUp } from "../layout/PopUp";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgLogo } from "../../../assets/images/svgs";

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

    const nextBtn = () => {
        navigation.navigate("Instruction");
    }

    const confirmBtn = () => {
        navigation.navigate("Index");
    }

    return (
        <Container>
            <SvgXml
                xml={svgLogo}
                style={styles.image}
            />
            <Text
                style={styles.heading}
            >
                Welcome to Colourfit
            </Text>
            <SignUpForm
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                onPswChange={handlePswChange}
                onConfPswChange={handlePswConf}
                onSubmit={savePrimary}
                error={error}
                backToSplash={backToSplash}
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
                            onPress={confirmBtn}
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
    },
    image: {
        alignSelf: "center",
        margin: 5
    }
})