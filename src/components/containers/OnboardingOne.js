import { Container, Text, Button, Icon, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { PopUp } from "../layout/PopUp";

export const OnboardingOne = () => {

    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);

    const skipSetup = () => {
        console.log("Skip the Setup")
    }

    const instructions = () => {
        console.log("Back to Instructions")
    }

    const openPop = () => {
        setPopOne(true);
    }

    const closePop = () => {
        setPopOne(false);
    }

    const cancelBtn = () => {
        setPopTwo(false);
    }

    const confirmBtn = () => {
        console.log("Go to Details Page")
    }

    return (
        <Container>
            <View
                style={styles.btnContainer}
            >
                <Icon as={<AntDesign name="left" size={24} color="black" />} />
                <Icon onPress={openPop} as={<AntDesign name="questioncircleo" size={24} color="black" />} />
            </View>
            <Text
                style={styles.heading}
            >
                Validate your skin tone
            </Text>
            <Button
                onPress={skipSetup}
                style={styles.btn}
            >
                Skip
            </Button>
            <Button
                onPress={instructions}
                style={styles.btn}
            >
                Back
            </Button>
            {popOne ? (<PopUp
                content={
                    <>
                        <Icon as={<AntDesign name="close" size={24} color="black" onPress={closePop} />} />
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

                    </>
                }
            />) : (console.log("Closed"))}
            {popTwo ? (<PopUp
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
                            To provide you with more personalized recommendations, you can retake your selfie later on the Profile page.
                        </Text>
                        <Button
                            onPress={confirmBtn}
                            style={styles.btn}
                        >
                            Confirm
                        </Button>
                        <Button
                            onPress={cancelBtn}
                            style={styles.btn}
                        >
                            Cancel
                        </Button>
                    </>
                }
            />) : (console.log("Closed"))}
        </Container >
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 3,
        alignSelf: "center"
    },
    btn: {
        marginTop: 10,
        width: 250
    },
    text: {
        fontSize: 16
    },
    headingPop: {
        fontWeight: "bold",
        fontSize: 20
    }
})