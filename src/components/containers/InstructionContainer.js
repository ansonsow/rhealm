import { Text, Button, Container } from "native-base"
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { PopUp } from "../layout/PopUp";

export const InstructionContainer = () => {

    const navigation = useNavigation();

    const [popUp, setPopUp] = useState(false);

    const onNext = () => {
        // console.log("Next Working");
        navigation.navigate("OnboardingOne");
    }

    const inputSkinTone = () => {
        setPopUp(!popUp);
        // navigation.navigate("OnboardingTwo");
    }

    const confirmBtn = () => {
        // console.log("Go to Details Page")
        navigation.navigate("OnboardingTwo");
    }

    const cancelBtn = () => {
        setPopUp(!popUp);
    }

    return (
        <Container>
            <Text
                style={styles.heading}
            >
                Instructions
            </Text>
            <Text
                style={styles.subheading}
            >
                In order to recommend based on your skin tone, we need your skin colour palette.
            </Text>
            <Text
                style={styles.text}
            >
                1. Please keep the distance of your camera about 20cm.
            </Text>
            <Text
                style={styles.text}
            >
                2. Please take a photo of your neck or arm.
            </Text>
            <Button
                onPress={onNext}
                style={styles.btn}
            >
                Next
            </Button>
            <Text>
                Already know your skin tone?&nbsp;
                <Text
                    onPress={inputSkinTone}
                    style={styles.pressable}
                >
                    Skip!
                </Text>
            </Text>

            {popUp ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            No worries!
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            To provide you with more personalized recommendations, you can retake your selfie later on the <Text style={styles.textHighlight}>Profile</Text> page.
                        </Text>
                        <Button
                            onPress={cancelBtn}
                            style={styles.btn}
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={confirmBtn}
                            style={styles.btn}
                        >
                            Confirm
                        </Button>

                    </>
                }
            />) : (console.log("Closed"))}

        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
    subheading: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10
    },
    text: {
        fontSize: 14,
        marginTop: 10
    },
    btn: {
        marginTop: 10,
        width: 250
    },
    pressable: {
        color: "#411E94",
        fontWeight: "bold"
    },
    textHighlight: {
        fontWeight: "bold"
    },
    headingPop: {
        fontWeight: "bold",
        fontSize: 20
    }
})