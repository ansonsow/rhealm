import { Container, Text, Button, Icon, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { CameraContainer } from "./CameraContainer";
import { Overlay } from "@rneui/themed";

export const OnboardingOne = () => {

    // const navigation = useNavigation();

    const [popOne, setPopOne] = useState(false);
    // const [popTwo, setPopTwo] = useState(false);

    // const skipSetup = () => {
    //     // console.log("Skip the Setup")
    //     setPopTwo(true);
    // }

    // const instructions = () => {
    //     // console.log("Back to Instructions")
    //     navigation.navigate("Instruction");
    // }

    const openPop = () => {
        setPopOne(!popOne);
    }

    const closePop = () => {
        setPopOne(!popOne);
    }

    return (
        <Container>
            <View
                style={styles.btnContainer}
            >
                <Icon as={<AntDesign name="left" size={24} color="black" />} />
                <Icon onPress={openPop} as={<AntDesign name="questioncircleo" size={24} color="black" />} />
            </View>
            <CameraContainer />
            {/* <Text
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
            </Button> */}

            {popOne ? (
                <Overlay
                    isVisible={popOne}
                >
                    <Icon as={<AntDesign name="close" size={24} color="black" onPress={closePop} />} />
                    <View style={styles.popCont}>
                        <Text
                            style={styles.textPop}
                        >
                            1. Please keep the distance of your camera about 20cm.
                        </Text>
                        <Text
                            style={styles.textPop}
                        >
                            2. Please take a photo of your neck or arm.
                        </Text>
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
})