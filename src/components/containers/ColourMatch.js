import skinTones from "../../../assets/colour-palette/skinTones.json"
import palettes from '../../../assets/colour-palette/palettes.json';

import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { useState } from "react";

export const ColourMatch = () => {
    const navigation = useNavigation();
    const [selectedPalette, setSelectedPalette] = useState({});

    const handleViewClick = () => {
        const springPale = palettes.Spring.Pale;
        setSelectedPalette(springPale);
    }; 

    const backToIndex = () => {
        navigation.navigate("Login");
    }

    return (
        <ScrollView>
            <View>
                <Text onPress={backToIndex}>
                    Back to Login
                </Text>

                <Text>COOL SKIN TONES:</Text>
                {skinTones.cool.map((color, index) => (
                    <TouchableHighlight key={index} style={{backgroundColor: color, width: 100, height: 30}} onPress={handleViewClick}>
                        <Text>{color}</Text>
                    </TouchableHighlight>
                ))}

                <Text>WARM SKIN TONES:</Text>
                {skinTones.warm.map((color, index) => (
                    <TouchableHighlight key={index} style={{backgroundColor: color, width: 100, height: 30}} onPress={handleViewClick}>
                        <Text>{color}</Text>
                    </TouchableHighlight>
                ))}

                <Text>Colour Palettes:</Text>
                {Object.entries(selectedPalette).map(([key, value]) => (
                    <View key={key} style={{backgroundColor: value, width: 100, height: 30}}>
                        <Text>{value}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};
