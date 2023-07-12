import hairColour from "../../../assets/hair-colour/hairColour.json";
import { View, Text, Select } from "native-base";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
// import ModalDropdown from "react-native-modal-dropdown";

export const HairColourSelection = () => {
    const [selectedColour, setSelectedColour] = useState(null);

    const handleColourSelection = (index) => {
        setSelectedColour(hairColour[index]);
    }

    // console.log(selectedColour);

    return (
        <View></View>



        // <View>
        //     <ModalDropdown
        //         options={hairColour.map((colour) => ({
        //             key: colour.name,
        //             style: { backgroundColor: colour.hexValue },
        //         }))}
        //         onSelect={handleColourSelection}
        //         dropdownStyle={styles.dropdownStyle}
        //         renderRow={(option, index, isSelected) => (
        //             <TouchableOpacity
        //                 key={option.key}
        //                 style={[
        //                     styles.dropdownOption,
        //                     {
        //                         backgroundColor: hairColour[index].hexValue
        //                     },
        //                     isSelected && styles.dropdownOptionSelected,
        //                 ]}
        //                 onPress={() => handleColourSelection(index)}
        //             >
        //                 <Text>{option.key}</Text>
        //             </TouchableOpacity>
        //         )}
        //         renderButtonText={(rowData) => rowData?.key || "Select Hair Colour"}
        //     />
        //     {selectedColour && (
        //         <View style={styles.colorCont}>
        //             <View style={styles.colourContainer}>
        //                 <View
        //                     style={{
        //                         backgroundColor: selectedColour.hexValue,
        //                         width: 20,
        //                         height: 20,
        //                         borderRadius: 20 / 2,
        //                     }}
        //                 />
        //                 <Text>{selectedColour.name}</Text>
        //             </View>
        //         </View>
        //     )}
        // </View>



        // <View>
        //     <Select
        //         // selectedValue={selectedColour}
        //         onValueChange={value => handleColourSelection(value)}
        //         placeholder="Select Hair Colour"
        //     >
        //         {hairColour.map((colour, index) => (
        //             <Select.Item
        //                 key={index}
        //                 value={colour}
        //                 label={
        //                     (<View style={styles.colourContainer}>
        //                         <View
        //                             key={index}
        //                             style={{
        //                                 backgroundColor: colour.hexValue,
        //                                 width: 20,
        //                                 height: 20,
        //                                 borderRadius: 20 / 2,
        //                             }}
        //                         >
        //                         </View>
        //                         <Text
        //                         >{colour.name}</Text>
        //                     </View>)
        //                 }
        //             />
        //         ))}
        //     </Select>
        //     {selectedColour && (
        //         <Text>Selected Colour: {selectedColour.name}</Text>
        //     )}
        // </View>

    )
}

const styles = StyleSheet.create({
    // colourContainer: {
    //     display: "flex",
    //     flexDirection: "row",
    //     alignContent: "center",
    //     alignItems: "center",
    //     gap: 5,
    //     padding: 5,
    //     borderColor: "#515151",
    //     borderWidth: 1,
    //     borderRadius: 15,
    //     margin: 5,
    //     // flex: 1
    // },
    dropdownStyle: {
        width: 200,
        marginTop: 10,
    },
    dropdownOption: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        color: "#fff"
    },
    dropdownOptionSelected: {
        backgroundColor: "#DDDDDD",
    },
    colorCont: {
        marginTop: 10,
    },
    colourContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
})