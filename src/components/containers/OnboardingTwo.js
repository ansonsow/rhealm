import { Container, Text, View, Pressable } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgConfirmIcon } from "../../../assets/images/svgs";
import { HairColourSelection } from "../layout/HairColour";
import { Overlay } from "@rneui/themed";

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

            <HairColourSelection />

            <Pressable
                onPress={saveSetup}
            >
                <Text style={styles.btnText}>Next</Text>
            </Pressable>

            <Text>Don't want to decide now? <Text style={styles.pressable} onPress={skipSetup}>Skip!</Text></Text>

            {popOne ? (
                <Overlay
                    isVisible={popOne}
                >
                    <View style={styles.popCont}>
                        <Text
                            style={styles.headingPop}
                        >
                            Are you sure?
                        </Text>
                        <Text
                            style={styles.textPop}
                        >
                            Your data will be lost.
                        </Text>

                        <View
                            style={styles.btnPopCont}
                        >
                            <Pressable
                                onPress={confirmBtn}
                                style={styles.btnPopNAction}
                            >
                                <Text style={styles.btnTextPopNAction}>Leave</Text>
                            </Pressable>
                            <Pressable
                                onPress={cancelBtn}
                                style={styles.btnPopPAction}
                            >
                                <Text style={styles.btnTextPopPAction}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </Overlay>
            ) : (console.log("Closed"))}

            {popTwo ? (
                <Overlay
                    isVisible={popTwo}
                >
                    <View style={styles.popCont}>
                        <SvgXml
                            xml={svgConfirmIcon}
                            style={styles.svg}
                        />
                        <Text
                            style={styles.textPop}
                        >
                            You have created an account.
                        </Text>

                        <View style={styles.btnPopCont}>
                            <Pressable
                                onPress={goToMain}
                                style={styles.btnPopNextAction}
                            >
                                <Text style={styles.btnTextPopNexAction}>Go to Main</Text>
                            </Pressable>
                        </View>
                    </View>
                </Overlay>
            ) : (console.log("Closed"))}

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

    // BTN
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },

    // SVG - this is necessary to change considering every SVG we need to alter
    svg: {
        color: "#000"
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
    btnPopNAction: {
        backgroundColor: "transparent",
        width: 100,
        alignItems: "center"
    },
    btnTextPopNAction: {
        fontSize: 14,
    },
    btnPopPAction: {
        backgroundColor: "#D33D12",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopPAction: {
        fontSize: 14,
        color: "#fff",
    },
    btnPopNextAction: {
        // backgroundColor: "#D33D12",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopNexAction: {
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
        padding: 20
    },
})