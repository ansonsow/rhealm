import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from 'native-base';
import { SvgXml } from 'react-native-svg';
import { svgClosetIcon, svgHomeIcon, svgScanIcon } from '../../../assets/images/svgs';

export const BottomBar = () => {
    const navigation = useNavigation();
    const [activatedItem, setActivatedItem] = useState(null);

    // const goToMainScreen = () => {
    //     if (activatedItem !== "home") {
    //         setActivatedItem("home");
    //         navigation.navigate("Main");
    //     }
    // }

    // const goToClosetScreen = () => {
    //     if (activatedItem !== "closet") {
    //         setActivatedItem("closet");
    //         navigation.navigate("ClosetScreen");
    //     }
    // }

    // const goToScanScreen = () => {
    //     setActivatedItem("scan");
    //     navigation.navigate("ClothingInstructions");
    // }

    // const getActivatedStyling = (item) => {
    //     return activatedItem === item ? styles.activeItem : styles.inactiveItem;
    // }

    useEffect(() => {
        const navigate = navigation.addListener("state", (event) => {
            const currentItem = event.data.state.routes[event.data.state.index];
            setActivatedItem(currentItem.name);
        })

        return navigate;
        // setActivatedItem(navigation.dangerouslyGetState().routes.slice(-1)[0].name);
    }, [navigation]);

    const handlePress = (item) => {
        setActivatedItem(item);
        navigation.navigate(item);
    }

    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity
                // onPress={goToScanScreen}
                // style={[styles.barIcons, getActivatedStyling("scan")]}
                onPress={() => handlePress("ClothingInstructions")}
                style={[styles.barIcons, activatedItem === "ClothingInstructions" && styles.activeItem]}
            >
                <SvgXml
                    xml={svgScanIcon}
                />
                <Text>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity
                // onPress={goToMainScreen}
                // style={[styles.barIcons, getActivatedStyling("home")]}
                onPress={() => handlePress("Main")}
                style={[styles.barIcons, activatedItem === "Main" && styles.activeItem]}
            >
                <SvgXml
                    xml={svgHomeIcon}
                />
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                // onPress={goToClosetScreen}
                // style={[styles.barIcons, getActivatedStyling("closet")]}
                onPress={() => handlePress("ClosetScreen")}
                style={[styles.barIcons, activatedItem === "ClosetScreen" && styles.activeItem]}
            >
                <SvgXml
                    xml={svgClosetIcon}
                />
                <Text>Closet</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        // shadow settings
        shadowOffsetX: 8,
        shadowOffsetY: 8,
        shadowSize: 20, // aka "spread"
        shadowBlur: 15, // aka "blur"
        shadowStrength: 0.4,
        shadowColor: "#000",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    barIcons: {
        alignItems: "center",
        justifyContent: "center"
    },
    activeItem: {
        borderColor: "#000",
        borderRadius: "50%",
        borderWidth: 1,
        width: 60,
        height: 60
    },
    // inactiveItem: {
    //     backgroundColor: "transparent"
    // }
});
