import hairColour from "../../../assets/hair-colour/hairColour.json";
import { View, Text } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const HairColourSelection = () => {
    const [selectedColour, setSelectedColour] = useState(null);

    const handleColourSelection = (colour) => {
        setSelectedColour(colour);
    }

    // console.log(selectedColour);

    const renderItem = (item) => {
        return (
            <View
                style={styles.item}
            >
                <View
                    style={[
                        styles.swatch,
                        { backgroundColor: item.value },
                    ]}
                />
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
                data={hairColour.map((colour) => ({
                    label: colour.name,
                    value: colour.hexValue
                }))}
                search
                labelField="label"
                valueField="value"
                placeholder="Select Hair Colour"
                searchPlaceholder="Search"
                value={selectedColour}
                onChange={handleColourSelection}
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
        fontFamily: "SF Pro Display Regular",
    },
    selectedTextStyle: {
        fontSize: 16,
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