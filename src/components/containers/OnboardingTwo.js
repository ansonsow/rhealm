import { Container, Text, Button, Icon, View } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { PopUp } from "../layout/PopUp";

export const OnboardingTwo = () => {

    const [pop, setPop] = useState(false);

    const instructions = () => {
        setPop(true);
    }

    const cancelBtn = () => {
        setPop(false);
    }

    const confirmBtn = () => {
        console.log("Go to Details Page")
    }

    const saveSetup = () => {
        console.log("Save the setup")
    }

    return (
        <Container>
            <View
                style={styles.btnContainer}
            >
            </View>
            <Text
                style={styles.heading}
            >
                Let us know more about you!
            </Text>

            {/* Include the dropdowns */}

            <Button
                onPress={saveSetup}
                style={styles.btn}
            >
                Save
            </Button>
            <Button
                onPress={instructions}
                style={styles.btn}
            >
                Back
            </Button>
            {pop ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            Are you sure?
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            Your data will be lost.
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