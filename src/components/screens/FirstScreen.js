import { Container, Text, Button, View } from "native-base";
import { StyleSheet } from "react-native";

export const FirstScreen = () => {

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
            <Text fontWeight="bold" fontSize={20}>Welcome to ColourFit</Text>
            <Button
                onPress={simpleSignUp}
                marginTop={10}
                width={250}
            >
                Sign up with email
            </Button>
            <View display="flex" flexDirection="row"
                alignSelf="center">
                <View
                    borderBottomWidth={StyleSheet.hairlineWidth}
                    width={100}
                />
                <Text
                    fontSize={16} marginTop={20}
                    alignSelf="center"
                >
                    or
                </Text>
                <View
                    borderBottomWidth={StyleSheet.hairlineWidth}
                    width={100}
                />
            </View>
            <Button
                onPress={googleSignUp}
                marginTop={10}
                width={250}
            >
                Google
            </Button>
            <Button
                onPress={fbSignUp}
                marginTop={5}
                width={250}
            >
                Facebook
            </Button>
        </Container>
    )
}