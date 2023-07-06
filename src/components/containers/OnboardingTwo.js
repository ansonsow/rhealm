import { Container, Text, Button, Icon, View } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { PopUp } from "../layout/PopUp";
import { useNavigation } from "@react-navigation/native";

export const OnboardingTwo = () => {

    const navigation = useNavigation();

    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);

    const skipSetup = () => {
        setPopOne(!popOne);
    }

    const cancelBtn = () => {
        setPopOne(!popOne);
    }

    const confirmBtn = () => {
        // console.log("Go to Details Page")
        navigation.navigate("Main");
    }

    const saveSetup = () => {
        setPopTwo(!popTwo);
    }

    const goToMain = () => {
        navigation.navigate("Main");
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
                Next
            </Button>

            <Text>Don't want to decide now? <Text style={styles.pressable} onPress={skipSetup}>Skip!</Text></Text>

            {popOne ? (<PopUp
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

            {popTwo ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.text}
                        >
                            You have created an account.
                        </Text>
                        <Button
                            onPress={goToMain}
                            style={styles.btn}
                        >
                            Go to Main
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
    },
    pressable: {
        color: "#411E94",
        fontWeight: "bold"
    },
})