import { Container, Text, View, Center } from "native-base";
import { ForgotPswForm } from "../forms/ForgotPswForm";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgLeftIcon, svgLogo } from "../../../assets/images/svgs";

export const ForgotPswContainer = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleNameChange = (name) => {
        setName(name);
        setError("");
        setSuccess("");
    }

    const handleEmailChange = (email) => {
        setEmail(email);
        setError("");
        setSuccess("");
    }

    const onSubmit = () => {
        if (email === "" || name === "") {
            setError("Please check your credentials.");
        }
        if (email !== "" && name !== "") {
            setSuccess("New password has been sent to your email. Please check the email to retrieve your password.");
        }
    }

    const backToLogin = () => {
        // console.log("Back to Login Clicked!");
        navigation.navigate("Login");
    }

    return (
        <Center>
            <View>
                {/* <TouchableOpacity
                    onPress={backToLogin}
                >
                    <SvgXml
                        xml={svgLeftIcon}
                        onPress={backToLogin}
                    />
                </TouchableOpacity> */}
                <SvgXml
                    xml={svgLogo}
                    style={styles.logo}
                />
                <View
                    style={styles.headingCont}
                >
                    <Text
                        style={styles.heading}
                    >
                        Welcome to
                    </Text>
                    <Text
                        style={styles.boldHeading}
                    >
                        Colourfit
                    </Text>
                </View>
                <Text
                    style={styles.subheading}
                >
                    Forgot Password?
                </Text>
                <ForgotPswForm
                    onNameChange={handleNameChange}
                    onEmailChange={handleEmailChange}
                    onSubmit={onSubmit}
                    error={error}
                    login={backToLogin}
                    success={success}
                />
            </View>
        </Center>
    )
}

const styles = StyleSheet.create({
    // HEADING LOGO
    heading: {
        fontWeight: "bold",
        fontSize: 24,
        // marginBottom: 20
    },
    boldHeading: {
        // fontFamily: "indivisible-semibold",
        fontSize: 36,
        paddingTop: 15
    },
    headingCont: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        gap: 10,
        marginTop: 20,
        marginBottom: 10
    },

    // SUBHEADING
    subheading: {
        fontSize: 16,
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold",
    },

    // LOGO
    logo: {
        alignSelf: "center",
        margin: 5
    },
})