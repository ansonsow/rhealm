import { Container, VStack, FormControl, HStack, Input, Pressable, Text, Select, Center, View, Image } from "native-base";
import { useState } from "react";
import { BACKEND } from "@env";
import axios from "axios";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity, StyleSheet } from "react-native";
import { svgLeftIcon } from "../../../assets/images/svgs";
import { useNavigation } from "@react-navigation/native";

const CreateClothingForm = props => {
    const navigation = useNavigation();

    const { coloursHex, coloursNaming, imageSelection } = props;

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
        setType(t)
    }

    const handleTextureChange = (t) => {
        setTexture(t)
    }

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

    console.log(combinedColours);

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

                        {/* <Select minWidth={200}
                            accessibilityLabel="Choose Color"
                            placeholder="Choose Color"
                            _selectedItem={{
                                bg: "purple",
                            }} mt={1}
                            onValueChange={itemValue => handleColorChange(itemValue)}
                        >
                            <Select.Item label="Black" value="black" style={styles.selectItem} />
                            <Select.Item label="White" value="white" /> */}
                        {/* <Select.Item label="Gray" value="gray" />
                                <Select.Item label="Navy blue" value="navy blue" />
                                <Select.Item label="Royal blue" value="royal blue" />
                                <Select.Item label="Sky blue" value="sky blue" />
                                <Select.Item label="Baby blue" value="baby blue" />
                                <Select.Item label="Red" value="red" />
                                <Select.Item label="Pink" value="pink" />
                                <Select.Item label="Magenta" value="magenta" />
                                <Select.Item label="Purple" value="purple" />
                                <Select.Item label="Lavender" value="lavender" />
                                <Select.Item label="Violet" value="violet" />
                                <Select.Item label="Green" value="green" />
                                <Select.Item label="Lime green" value="lime green" />
                                <Select.Item label="Olive green" value="olive green" />
                                <Select.Item label="Yellow" value="yellow" />
                                <Select.Item label="Gold" value="gold" />
                                <Select.Item label="Orange" value="orange" />
                                <Select.Item label="Brown" value="brown" />
                                <Select.Item label="Beige" value="beige" />
                                <Select.Item label="Cream" value="cream" />
                                <Select.Item label="Charcoal gray" value="charcoal gray" />
                                <Select.Item label="Taupe" value="taupe" />
                                <Select.Item label="Silver" value="silver" />
                                <Select.Item label="Burgundy" value="burgundy" />
                                <Select.Item label="Bronze" value="bronze" />
                                <Select.Item label="Maroon" value="maroon" />
                                <Select.Item label="Indigo" value="indigo" />
                                <Select.Item label="Coral" value="coral" />
                                <Select.Item label="Plum" value="plum" />
                                <Select.Item label="Peach" value="peach" />
                                <Select.Item label="Mustard" value="mustard" />
                                <Select.Item label="Salmon" value="salmon" />
                                <Select.Item label="Rust" value="rust" />
                                <Select.Item label="Teal" value="teal" />
                                <Select.Item label="Off-white" value="off-white" />
                                <Select.Item label="Turquoise" value="turquoise" />
                                <Select.Item label="Mint green" value="mint green" /> */}
                        {/* </Select> */}
                    </HStack>
                </FormControl>

                <FormControl isRequired>
                    <FormControl.Label>Texture</FormControl.Label>
                    <HStack width="100%">
                        <Select minWidth="200"
                            accessibilityLabel="Choose Texture"
                            placeholder="Choose Texture"
                            _selectedItem={{
                                bg: "purple",
                            }} mt={1}
                            onValueChange={itemValue => handleTextureChange(itemValue)}
                        >
                            <Select.Item label="Cotton" value="cotton" />
                            <Select.Item label="Knit" value="knit" />
                            <Select.Item label="Polyester" value="polyester" />
                            <Select.Item label="Chiffon" value="chiffon" />
                            {/* <Select.Item label="Silk" value="silk" />
                                <Select.Item label="Satin" value="satin" />
                                <Select.Item label="Wool" value="wool" />
                                <Select.Item label="Down" value="down" />
                                <Select.Item label="Linen" value="linen" />
                                <Select.Item label="Spandex" value="spandex" />
                                <Select.Item label="Nylon" value="nylon" />
                                <Select.Item label="Lamé" value="lamé" />
                                <Select.Item label="Leather" value="leather" />
                                <Select.Item label="Twill" value="twill" />
                                <Select.Item label="Denim" value="denim" />
                                <Select.Item label="Fleece" value="fleece" />
                                <Select.Item label="Velvet" value="velvet" />
                                <Select.Item label="Brocade" value="brocade" />
                                <Select.Item label="Rayon" value="rayon" />
                                <Select.Item label="Suede" value="suede" /> */}

                        </Select>
                    </HStack>
                </FormControl>


                {/* <FormControl isRequired>
                    <FormControl.Label>Type</FormControl.Label>
                    <HStack width="100%">
                        <Select minWidth="200"
                            accessibilityLabel="Choose Type"
                            placeholder="Choose Type"
                            _selectedItem={{
                                bg: "purple",
                            }} mt={1}
                            onValueChange={itemValue => handleTypeChange(itemValue)}
                        >
                            <Select.Item label="T-shirt" value="tshirt" />
                            <Select.Item label="Pants" value="pants" />
                            <Select.Item label="Shirt" value="shirt" />
                            <Select.Item label="Jeans" value="jeans" /> */}
                {/* <Select.Item label="Blouse" value="blouse" />
                                <Select.Item label="Shorts" value="shorts" />
                                <Select.Item label="Sweater" value="sweater" />
                                <Select.Item label="Leggings" value="leggings" />
                                <Select.Item label="Hoodie" value="hoodie" />
                                <Select.Item label="Jumpsuit" value="jumpsuit" />
                                <Select.Item label="Jacket" value="jacket" />
                                <Select.Item label="Suit" value="suit" />
                                <Select.Item label="Coat" value="coat" />
                                <Select.Item label="Vest" value="vest" />
                                <Select.Item label="Blazer" value="blazer" />
                                <Select.Item label="Cardigan" value="cardigan" />
                                <Select.Item label="Dress" value="dress" />
                                <Select.Item label="Tank top" value="tanktop" />
                                <Select.Item label="Skirt" value="skirt" />
                                <Select.Item label="Camisole" value="camisole" />
                                <Select.Item label="Crop top" value="croptop" />
                                <Select.Item label="Bodysuit" value="bodysuit" />
                                <Select.Item label="Polo shirt" value="poloshirt" />
                                <Select.Item label="Overalls" value="overalls" />
                                <Select.Item label="Sweatshirt" value="sweatshirt" />
                                <Select.Item label="Tracksuit" value="tracksuit" />
                                <Select.Item label="Onesie" value="onesie" />
                                <Select.Item label="Parka" value="parka" />
                                <Select.Item label="Kimono" value="kimono" />
                                <Select.Item label="Trench coat" value="trenchcoat" />
                                <Select.Item label="Cape" value="cape" />
                                <Select.Item label="Tunic" value="tunic" /> */}

                {/* </Select>
                    </HStack>
                </FormControl> */}

                <Pressable
                    onPress={handleClicked}
                >
                    <Text style={styles.btnText}>Add Item</Text>
                </Pressable>

            </VStack>
        </View>
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