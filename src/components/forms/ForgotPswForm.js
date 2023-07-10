import { Container, VStack, FormControl, HStack, Input, Button, Pressable, Text, View } from "native-base";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { svgAlertIcon, svgConfirmIcon } from "../../../assets/images/svgs";
import { StyleSheet } from "react-native";

export const ForgotPswForm = props => {

    const { onSubmit, onNameChange, onEmailChange, error, login, success } = props;

    return (
        <Container>
            <VStack>
                {error &&
                    <View style={styles.alert}>
                        <SvgXml
                            xml={svgAlertIcon}
                        />
                        <Text color="#942100">{error}</Text>
                    </View>}
                {success &&
                    <View style={styles.success}>
                        <SvgXml
                            xml={svgConfirmIcon}
                            // fill="currentColor"
                            style={styles.svg}
                        />
                        <Text color="#0c6e01">{success}</Text>
                    </View>}
                <FormControl isRequired>
                    <FormControl.Label>Name</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="Name"
                            onChangeText={value => {
                                onNameChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Email</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="Email"
                            onChangeText={value => {
                                onEmailChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <Pressable
                    onPress={onSubmit}
                >
                    <Text style={styles.btnText}>Reset Password</Text>
                </Pressable>
                <Pressable
                    onPress={login}
                >
                    <Text style={styles.btnText}>Back to Login Page</Text>
                </Pressable>
            </VStack>
        </Container>
    )
}

const styles = StyleSheet.create({
    // ALERTS
    alert: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#f7dbd2",
        padding: 10,
        marginBottom: 10,
        // width: "100%"
        borderRadius: "10px",
        alignContent: "center",
        alignItems: "center"
    },
    success: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#95cf8f",
        padding: 10,
        marginBottom: 10,
        maxWidth: "100%",
        borderRadius: "10px",
        alignContent: "center",
        alignItems: "center",
    },

    // BTN TEXT
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },

    // SVG - this is necessary to change considering every SVG we need to alter
    svg: {
        color: "#0c6e01"
    },
})