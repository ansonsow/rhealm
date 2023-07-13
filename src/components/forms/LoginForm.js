import { Container, VStack, FormControl, HStack, Input, Icon, Pressable, Text, View, Center } from "native-base";
import { useState } from "react";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { svgAlertIcon } from "../../../assets/images/svgs";
import { StyleSheet, TouchableOpacity } from "react-native";

export const LoginForm = props => {

    const { onSubmit, onEmailChange, onPswChange, error, forgotPsw } = props;

    const [show, setShow] = useState(false);

    return (
        <Container style={styles.formCont}>
            <VStack>
                {error &&
                    <View style={styles.alert}>
                        <SvgXml
                            xml={svgAlertIcon}
                        />
                        <Text color="#942100">{error}</Text>
                    </View>}
                <FormControl isRequired>
                    <FormControl.Label
                    // color="#f4f"
                    >Email</FormControl.Label>
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
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="Password"
                            variant="underlined"
                            type={show ? "text" : "password"}
                            InputRightElement={
                                <TouchableOpacity onPress={() => setShow(!show)} paddingRight={1} style={styles.eye}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} size={10} color="muted.400" />} />
                                </TouchableOpacity>
                            }
                            // InputLeftElement={
                            //     <Icon
                            //         as={<SimpleLineIcons name="lock" />}
                            //         style={styles.leftIcons}
                            //     />
                            // }
                            onChangeText={value => {
                                onPswChange(value)
                                password = value;
                            }}
                        />
                    </HStack>
                </FormControl>
                <Text
                    onPress={forgotPsw}
                    style={styles.forgot}
                >Forgot Password?</Text>
                <Pressable
                    onPress={onSubmit}
                >
                    <Text style={styles.btnText}>Sign In</Text>
                </Pressable>
            </VStack>
        </Container>
    )
}

const styles = StyleSheet.create({
    // FORM CONTAINER
    formCont: {
        marginTop: 20,
        marginLeft: 10
    },
    forgot: {
        textAlign: "right",
        fontSize: 14
    },

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

    // FORMS ICON
    eye: {
        paddingRight: 10
    },

    // BTN TEXT
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },
})