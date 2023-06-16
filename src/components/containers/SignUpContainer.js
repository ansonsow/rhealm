import { Container, Center, Text } from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { useState } from "react";
import axios from "axios";
import { BACKEND } from "@env";
import { SignUpOnePop } from "../layout/SignUpOnePop";

export const SignUpContainer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPsw, setConfPsw] = useState("");
    const [error, setError] = useState("");
    const [popOne, setPopOne] = useState(false);
    // const [popTwo, setPopTwo] = useState(false);

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

    // console.log(name);
    // console.log(email);
    // console.log(psw);

    const backToSplash = () => {
        console.log("Back To Splash!")
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
            })
        }
    }

    const cancelBtn = () => {
        // setPopOne(true);
    }

    const leaveBtn = () => {
        console.log("Leave Page is Working!")
    }

    return (
        <Container>
            <Text
                fontWeight="bold"
                fontSize={20}
                marginBottom={20}
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
            {popOne ? (<SignUpOnePop />) : (console.log("Sign up pop closed"))}
        </Container>
    )
}