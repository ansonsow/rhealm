import { Container, VStack, FormControl, HStack, Input, Button, Icon, Pressable, Text, View } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { svgAlertIcon } from "../../../assets/images/svgs";


const SignUpForm = props => {

    const { onSubmit, onNameChange, onEmailChange, onPswChange, onConfPswChange, error, backToSplash } = props;

    const [show, setShow] = useState(false);
    const [showConf, setShowConf] = useState(false);

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
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="************"
                            type={show ? "text" : "password"}
                            InputRightElement={
                                <TouchableOpacity onPress={() => setShow(!show)} paddingRight={10} style={styles.eye}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} size={10} color="muted.400" />} />
                                </TouchableOpacity>
                            }
                            onChangeText={value => {
                                onPswChange(value)
                                password = value;
                            }}
                        />
                    </HStack>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="************"
                            type={showConf ? "text" : "password"}
                            InputRightElement={
                                <TouchableOpacity onPress={() => setShowConf(!showConf)} paddingRight={10} style={styles.eye}>
                                    <Icon as={<MaterialIcons name={showConf ? "visibility" : "visibility-off"} size={10} color="muted.400" />} />
                                </TouchableOpacity>
                            }
                            onChangeText={value => {
                                onConfPswChange(value)
                                confPassword = value
                            }}
                        />
                    </HStack>
                </FormControl>
                <Pressable
                    onPress={onSubmit}
                >
                    <Text style={styles.btnText}>Next</Text>
                </Pressable>
                <Pressable
                    onPress={backToSplash}
                >
                    <Text style={styles.btnText}>Back</Text>
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

export default SignUpForm;
