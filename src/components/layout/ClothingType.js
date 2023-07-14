import clothingType from "../../../assets/clothing-type/clothingType.json";
import { View, Text } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const ClothingTypeSelection = ({ selectedClothingType, onTypeChange }) => {

    // const [selectedClothingType, setSelectedClothingType] = useState(null);

    const handleClothingTypeSelection = (clothing) => {
        onTypeChange(clothing);
    }

    // console.log(selectedClothingType);

    const renderItem = (item) => {
        return (
            <View
                style={styles.item}
            >
                {/* <View
                    style={[
                        styles.svgs,
                        { backgroundColor: item.value },
                    ]}
                /> */}
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
                data={clothingType.map((clothing) => ({
                    label: clothing.label,
                    value: clothing.name
                }))}
                search
                labelField="label"
                valueField="value"
                placeholder="Select Clothing Type"
                searchPlaceholder="Search"
                value={selectedClothingType}
                onChange={handleClothingTypeSelection}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        // margin: 16,
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
        fontFamily: "SF Pro Display Regular",
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
    swatch: {
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