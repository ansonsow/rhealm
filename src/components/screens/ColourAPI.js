import { useNavigation } from "@react-navigation/native";
import { Container, Input, Image, View, Pressable, Center } from "native-base";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { svgLeftIcon } from "../../../assets/images/svgs";
import { XIMILAR_AI_ACCESS_KEY } from "@env";
import { useState } from "react";
import axios from "axios";

export const ColourAPI = () => {

    const navigation = useNavigation();
    const [imageSelection, setImageSelection] = useState(null);
    const [coloursHex, setColoursHex] = useState(null);
    const [coloursNaming, setColoursNaming] = useState(null);

    const backToInstructions = () => {
        navigation.navigate("ClothingInstructions");
    }

    // const clothingAdd = () => {
    //     navigation.navigate("ClothingsContainer", {
    //         coloursHex: coloursHex,
    //         coloursNaming: coloursNaming
    //     })
    // }

    const onImageChange = (image) => {
        setImageSelection(image);
    }

    // console.log(imageSelection);

    const clothingAdd = () => {
        axios.post("https://api.ximilar.com/dom_colors/generic/v2/dominantcolor", {
            "color_names": true,
            "records": [
                {
                    "_url": imageSelection
                }
            ]
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${XIMILAR_AI_ACCESS_KEY}`
                }
            }
        )
            .then((response) => {
                const res = response.data;
                // Present all colours
                const colours = res.records[0]._dominant_colors;

                // Present only hex colours
                const hexColours = colours.rgb_hex_colors;
                const coloursNames = colours.color_names_pantone;
                // console.log(hexColours);
                // setColoursHex(hexColours);
                // setColoursNaming(coloursNames);
                navigation.navigate("ClothingsContainer", {
                    // coloursHex: coloursHex,
                    // coloursNaming: coloursNaming
                    coloursHex: hexColours,
                    coloursNaming: coloursNames,
                    imageSelection: imageSelection
                })
            })
            .catch((error) => {
                console.log("E: ", error.response);
            })
    }

    // console.log(coloursHex);
    // console.log(coloursNaming);

    return (
        <Center>
            <TouchableOpacity
                onPress={backToInstructions}
            >
                <SvgXml
                    xml={svgLeftIcon}
                />
            </TouchableOpacity>
            <Text>Colour Scanning</Text>

            <Input
                placeholder="Paste your link here"
                onChangeText={value => {
                    onImageChange(value)
                }}
            />

            {imageSelection && <Image
                source={{ uri: imageSelection }}
                alt="Image"
                // style={styles.image}
                width={200}
                height={200}
            />}

            {/* <Pressable
                onPress={getColours}
            >
                <Text style={styles.btnText}>Get Colours List</Text>
            </Pressable> */}

            {/* {coloursHex && coloursHex.map((hexValue, index) => (
                <View style={styles.colourContainer}>
                    <View
                        key={index}
                        style={{
                            backgroundColor: hexValue,
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                        }}
                    >
                    </View>
                    <Text
                    // key={coloursNaming[index]}
                    >{coloursNaming && coloursNaming[index]}</Text>
                </View>
            ))} */}

            <Pressable
                onPress={clothingAdd}
            >
                <Text style={styles.btnText}>Next</Text>
            </Pressable>


        </Center>

    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        width: 250
    },
    colourContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        gap: 5,
        padding: 5,
        borderColor: "#515151",
        borderWidth: 1,
        borderRadius: 15,
        margin: 5
    },
    // image: {
    //     width: 200,
    //     height: 200,
    //     backgroundColor: "transparent"
    // }

    // BTN TEXT
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },
})