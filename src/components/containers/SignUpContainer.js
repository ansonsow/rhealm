import { Container, Center, Text } from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { useState } from "react";
import axios from "axios";
import { BACKEND } from "@env";

export const SignUpContainer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPsw, setConfPsw] = useState("");
    const [error, setError] = useState("");

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

    return (
        <Container>
            <Text fontWeight="bold" fontSize={20} marginBottom={20}>Sign Up</Text>
            <SignUpForm
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                onPswChange={handlePswChange}
                onConfPswChange={handlePswConf}
                onNext={savePrimary}
                error={error}
            />
        </Container>
    )
}