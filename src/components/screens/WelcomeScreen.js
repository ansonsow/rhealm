import { Container, Text, Button, View, Center, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgLogo } from "../../../assets/images/svgs";

export const WelcomeScreen = () => {

    const navigation = useNavigation();

    const simpleSignUp = () => {
        console.log("First Screen Working");
        navigation.navigate("SignUp");
    }

    const fbSignUp = () => {
        console.log("FB Working")
    }


    return (
        <Center>
            <View>
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

                <Pressable
                    onPress={simpleSignUp}
                >
                    <Text style={styles.btnText}>Sign up with email</Text>
                </Pressable>

                <View
                    style={styles.lines}
                >
                    <View
                        style={styles.line}
                    />
                    <Text
                        style={styles.lineText}
                    >
                        or connect with
                    </Text>
                    <View
                        style={styles.line}
                    />
                </View>

                <Pressable
                // onPress={simpleSignUp}
                >
                    <Text style={styles.btnText}>Google</Text>
                </Pressable>

                <Pressable
                    onPress={fbSignUp}
                >
                    <Text style={styles.btnText}>Facebook</Text>
                </Pressable>
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

    // LOGO
    logo: {
        alignSelf: "center",
        margin: 5
    },

    // BTN
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },

    // LINES
    lines: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        // marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        borderBottomWidth: 1,
        width: 90,
        borderColor: "#969AA8",
        // flex: 1
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20
    },
    lineText: {
        fontSize: 12,
        marginTop: 20,
        alignSelf: "center",
        color: "#969AA8",
    },
})