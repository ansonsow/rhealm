import { Container, VStack, FormControl, HStack, Input, Pressable, Text, View } from "native-base";
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
                        <Text color="#345B00">{success}</Text>
                    </View>}
                <FormControl isRequired>
                    <FormControl.Label>Name</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="Name"
                            variant="underlined"
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
                            variant="underlined"
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
        borderRadius: 10,
        alignContent: "center",
        alignItems: "center"
    },
    success: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#84C42C",
        opacity: 0.2,
        padding: 10,
        marginBottom: 10,
        maxWidth: "100%",
        borderRadius: 10,
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
        color: "#345B00"
    },
})