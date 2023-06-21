import { Container, Text, Button, View } from "native-base";
import { StyleSheet } from "react-native";

export const WelcomeScreen = () => {

    const simpleSignUp = () => {
        console.log("First Screen Working")
    }

    const googleSignUp = () => {
        console.log("Google Working")
    }

    const fbSignUp = () => {
        console.log("FB Working")
    }


    return (
        <Container>
            <Text style={styles.heading} >Welcome to ColourFit</Text>
            <Button
                style={styles.btn}
                onPress={simpleSignUp}
            >
                Sign up with email
            </Button>
            <View
                style={styles.lines}
            >
                <View
                    style={styles.line}
                />
                <Text
                    style={styles.lineText}
                    alignSelf="center"
                >
                    or
                </Text>
                <View
                    style={styles.line}
                />
            </View>
            <Button
                style={styles.btn}
                onPress={googleSignUp}
            >
                Google
            </Button>
            <Button
                style={styles.btn}
                onPress={fbSignUp}
            >
                Facebook
            </Button>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
    btn: {
        marginTop: 10,
        width: 250
    },
    lines: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center"
    },
    line: {
        borderBottomWidth: 1,
        width: 100
    },
    lineText: {
        fontSize: 16,
        marginTop: 20
    }
})