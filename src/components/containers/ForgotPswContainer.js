import { Container, Text } from "native-base";
import { ForgotPswForm } from "../forms/ForgotPswForm";
import { useState } from "react";
import { ForgotPswPop } from "../layout/ForgotPswPop";

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
                fontWeight="bold"
                fontSize={20}
                marginBottom={20}
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
            {pop ? (<ForgotPswPop onPress={backToLoginPop} />) : (console.log("Popup not Open"))}
        </Container>
    )
}