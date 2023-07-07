import { Container, Text, View, Button } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svgHoodie, svgLeftIcon, svgMiniShorts, svgShortSleeveShirt, svgShorts, svgSkorts, svgSweater } from "../../../assets/images/svgs";

export const ClothingInstructionContainer = () => {

    const navigation = useNavigation();

    const backToMain = () => {
        console.log("Working");
        // navigation.navigate("Main");
    }

    const onCamera = () => {
        console.log("Add camera feature");
        navigation.navigate("Testing");
    }

    return (
        <Container>
            <View style={styles.headingInstructionCont}>
                <TouchableOpacity
                    onPress={backToMain}
                    style={styles.test}
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

            <View style={styles.imagesCont}>
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
            </View>

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
            <Button
                onPress={onCamera}
                style={styles.btn}
            >
                Scan
            </Button>
        </Container>
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
        alignItems: "center"
    },
    headingInstructionCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    beachWeather: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 5
    },
    coldWeather: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 5
    },
    coolWeather: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 5
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
    test: {
        borderColor: "red",
        borderWidth: 2
    }
})