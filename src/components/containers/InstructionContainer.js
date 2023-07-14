import { Text, Container, Pressable, View } from "native-base"
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Overlay } from "@rneui/themed";

export const InstructionContainer = () => {

    const navigation = useNavigation();

    const [popUp, setPopUp] = useState(false);

    const onNext = () => {
        // console.log("Next Working");
        navigation.navigate("OnboardingOne");
        setPopUp(!popUp);
    }

    const inputSkinTone = () => {
        setPopUp(!popUp);
        // navigation.navigate("OnboardingTwo");
    }

    const confirmBtn = () => {
        // console.log("Go to Details Page")
        navigation.navigate("OnboardingTwo");
        setPopUp(!popUp);
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
            <Pressable
                onPress={onNext}
            >
                <Text style={styles.btnText}>Next</Text>
            </Pressable>
            <Text>
                Already know your skin tone?&nbsp;
                <Text
                    onPress={inputSkinTone}
                    style={styles.pressable}
                >
                    Skip!
                </Text>
            </Text>

            {popUp ? (
                <Overlay
                    isVisible={popUp}
                >
                    <View style={styles.popCont}>
                        <Text
                            style={styles.headingPop}
                        >
                            No worries!
                        </Text>
                        <Text
                            style={styles.textPop}
                        >
                            To provide you with more personalized recommendations, you can retake your selfie later on the <Text style={styles.textHighlight}>Profile</Text> page.
                        </Text>

                        <View
                            style={styles.btnPopCont}
                        >
                            <Pressable
                                onPress={cancelBtn}
                                style={styles.btnPopNAction}
                            >
                                <Text style={styles.btnTextPopNAction}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                onPress={confirmBtn}
                                style={styles.btnPopPAction}
                            >
                                <Text style={styles.btnTextPopPAction}>Confirm</Text>
                            </Pressable>
                        </View>
                    </View>
                </Overlay>
            ) : (console.log("Closed"))}
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

    // POPUP
    headingPop: {
        fontWeight: "bold",
        fontSize: 16,
        // fontFamily: "indivisible-semibold",
    },
    textPop: {
        fontSize: 16,
        paddingTop: 10,
    },
    textHighlight: {
        fontWeight: "bold"
    },
    btnPopNAction: {
        backgroundColor: "transparent",
        width: 100,
        alignItems: "center"
    },
    btnTextPopNAction: {
        fontSize: 14,
    },
    btnPopPAction: {
        backgroundColor: "#84C42C",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopPAction: {
        fontSize: 14,
        color: "#fff",
    },
    btnPopCont: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignContent: "flex-end"
    },
    popCont: {
        padding: 20,

    },

    // BTN
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },
})