import { Container, Text, View, Button, Center, Pressable } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgAlertIcon, svgHoodie, svgLeftIcon, svgMiniShorts, svgShortSleeveShirt, svgShorts, svgSkorts, svgSweater } from "../../../assets/images/svgs";

export const ClothingInstructionContainer = () => {

    const navigation = useNavigation();

    const backToMain = () => {
        navigation.navigate("Main");
    }

    const onCamera = () => {
        console.log("Add camera feature");
        navigation.navigate("ColourAPI");
    }

    return (
        <Center>
            <View style={styles.headingInstructionCont}>
                <TouchableOpacity
                    onPress={backToMain}
                >
                    <SvgXml
                        xml={svgLeftIcon}
                    />
                </TouchableOpacity>

                <Text
                    style={styles.heading}
                // onPress={backToMain}
                >
                    Instructions
                </Text>
            </View>

            {/* <View style={styles.imagesCont}>
                <View style={styles.beachWeather}>
                    <SvgXml
                        xml={svgShortSleeveShirt}
                    />
                    <SvgXml
                        xml={svgMiniShorts}
                    />
                </View>
                <View style={styles.coldWeather}>
                    <SvgXml
                        xml={svgHoodie}
                    />
                    <SvgXml
                        xml={svgShorts}
                    />
                </View>
                <View style={styles.coolWeather}>
                    <SvgXml
                        xml={svgSweater}
                    />
                    <SvgXml
                        xml={svgSkorts}
                    />
                </View>
            </View> */}

            <Text
                style={styles.subheading}
            >
                Let’s scan your clothing.
            </Text>
            <Text
                style={styles.text}
            >
                1. We will be taking two photos.
            </Text>
            <Text
                style={styles.text}
            >
                First, take the photo of the item from a fair distance.
            </Text>
            <Text
                style={styles.text}
            >
                Second, take the photo of the item’s colour keeping a distance about 20cm.
            </Text>
            <Text
                style={styles.text}
            >
                2. Both photos need to be taken with a clean background.
            </Text>

            <Pressable
                onPress={onCamera}
            >
                <Text style={styles.btnText}>
                    Scan
                </Text>
            </Pressable>
        </Center>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 10,
    },
    imagesCont: {
        // width: "100%",
        // height: "300px",
        backgroundColor: "#F7F7F7",
        paddingHorizontal: 30,
        paddingVertical: 30,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#f4f",
        borderWidth: 2
    },
    headingInstructionCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    beachWeather: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 5,
        borderColor: "#f4f",
        borderWidth: 2
    },
    coldWeather: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 5,
        borderColor: "#f4f",
        borderWidth: 2
    },
    coolWeather: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 5,
        borderColor: "#f4f",
        borderWidth: 2
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

    // BTN TEXT
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },
})