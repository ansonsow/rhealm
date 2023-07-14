import clothingTexture from "../../../assets/clothing-texture/clothingTexture.json";
import { View, Text, Image } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const ClothingTextureSelection = ({ selectedClothingTexture, onTextureChange }) => {
    // const [selectedClothingTexture, setSelectedClothingTexture] = useState(null);

    const handleClothingTextureSelection = (clothing) => {
        onTextureChange(clothing);
    }

    // console.log(selectedClothingTexture);

    const renderItem = (item) => {
        return (
            <View
                style={styles.item}
            >
                {item.uri && (
                    <Image
                        source={{ uri: item.uri }}
                        style={styles.image}
                        alt="Texture"
                    />
                )}
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={clothingTexture.map((clothing) => ({
                    label: clothing.label,
                    value: clothing.name,
                    uri: clothing.uri
                }))}
                search
                labelField="label"
                valueField="value"
                placeholder="Select Clothing Texture"
                searchPlaceholder="Search"
                value={selectedClothingTexture}
                onChange={handleClothingTextureSelection}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "#77757E",
        // fontFamily: "SF Pro Display Regular",
    },
    selectedTextStyle: {
        fontSize: 14,
        borderColor: "#77757E",
        borderWidth: 1,
        padding: 6,
        borderRadius: 15
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    container: {
        padding: 16,
        justifyContent: "center",
        alignContent: "center",
        width: "100%"
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 8,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderColor: "#77757E",
        borderWidth: 1,
        margin: 5,
        borderRadius: 15
    },
    textItem: {
        color: "#515151",
        fontSize: 14
    }
})