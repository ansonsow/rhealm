import { Container, VStack, FormControl, HStack, Input, Pressable, Text, Select, Center, View, Image } from "native-base";
import { useState } from "react";
import { BACKEND } from "@env";
import axios from "axios";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity, StyleSheet } from "react-native";
import { svgLeftIcon } from "../../../assets/images/svgs";
import { useNavigation } from "@react-navigation/native";
import { ClothingTypeSelection } from "../layout/ClothingType";
import { ClothingTextureSelection } from "../layout/ClothingTexture";

const CreateClothingForm = props => {
    const navigation = useNavigation();

    const { coloursHex, coloursNaming, imageSelection } = props;

    // const [selectedClothingType, setSelectedClothingType] = useState(null);

    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [type, setType] = useState('')
    const [texture, setTexture] = useState('')

    const handleNameChange = (n) => {
        setName(n)
    }

    const handleColorChange = (c) => {
        setColor(c)
    }

    const handleTypeChange = (t) => {
        setType([t])
    }
    // console.log(type);

    const handleTextureChange = (t) => {
        setTexture([t])
    }
    console.log(texture.uri);

    const combinedColours = coloursHex.map((hexValue, index) => ({
        hexValue,
        name: coloursNaming[index]
    }));

    const handleClicked = () => {
        const uid = props.user._id
        // console.log(uid)
        // console.log("huh")
        // console.log(`${BACKEND}/clothing`)
        axios.post(`${BACKEND}/clothing`, {
            userId: uid,
            name: name,
            colour: combinedColours,
            type: type,
            texture: texture,
            photo: imageSelection
        }, 
         {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => {
            props.forceUpdate()
        }).catch((err)=>{
            console.log("Error:", err);
            console.log("Response:", err.response);

        })
    }

    const backToInstructions = () => {
        navigation.navigate("ClothingInstructions");
    }

    // console.log(combinedColours);

    return (
        <View>
            <TouchableOpacity
                onPress={backToInstructions}
            >
                <SvgXml
                    xml={svgLeftIcon}
                />
            </TouchableOpacity>
            <VStack>
                {imageSelection && <Image
                    source={{ uri: imageSelection }}
                    alt="Image"
                    // style={styles.image}
                    width={100}
                    height={100}
                />}
                <FormControl isRequired>
                    <FormControl.Label>Name</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="Cool shirt"
                            variant="underlined"
                            backgroundColor="transparent"
                            onChangeText={value => {
                                handleNameChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>

                <FormControl isRequired>
                    <FormControl.Label>Color</FormControl.Label>
                    <HStack>
                        <View style={styles.colorCont}>
                            {combinedColours && combinedColours.map((colour, index) => (
                                <View style={styles.colourContainer}>
                                    <View
                                        key={index}
                                        style={{
                                            backgroundColor: colour.hexValue,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 20 / 2,
                                        }}
                                    >
                                    </View>
                                    <Text
                                    // key={coloursNaming[index]}
                                    >{colour.name}</Text>
                                </View>
                            ))}
                        </View>
                    </HStack>
                </FormControl>

                {/* <FormControl isRequired>
                    <FormControl.Label>Texture</FormControl.Label>
                    <HStack>
                        <ClothingTextureSelection
                            selectedClothingTexture={texture}
                            onTextureChange={handleTextureChange}
                        />
                    </HStack>
                </FormControl> */}


                <FormControl isRequired>
                    <FormControl.Label>Type of Clothing</FormControl.Label>
                    <HStack>
                        <ClothingTypeSelection
                            selectedClothingType={type}
                            onTypeChange={handleTypeChange}
                        />
                    </HStack>
                </FormControl>

                <Pressable
                    onPress={handleClicked}
                >
                    <Text style={styles.btnText}>Add Item</Text>
                </Pressable>

            </VStack>
        </View >
    )
}

const styles = StyleSheet.create({
    // selectItem: {
    //     backgroundColor: "#fff"
    // }
    colorCont: {
        // borderColor: "#000",
        borderBottomWidth: 1,
        // borderRadius: 15,
        borderBottomColor: "#E9E9E9",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
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
        margin: 5,
        // flex: 1
    },

    // BTN
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },
})

export default CreateClothingForm;