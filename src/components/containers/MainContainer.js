import { Container, Text } from "native-base";
import { StyleSheet, Button } from "react-native";
import { Heading } from "../layout/Heading";
import { useState } from "react";
import { Menu } from "../layout/Menu";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomBar } from '../layout/BottomBar';

import TrendingSlider from "./trending-slider/TrendingSlider";

export const MainContainer = () => {
    const navigation = useNavigation();


    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(!menu);
        // console.log("Menu btn was clicked.")
    }

    const closeMenu = () => {
        setMenu(!menu);
        console.log("Closed")
    }

    const CameraBtn = () => {
        navigation.navigate("CameraContainer");
    }

    const ClothingsBtn = () => {
        navigation.navigate("ClothingsContainer");
    }

    const openInstructions = () => {
        navigation.navigate("ClothingInstructions");
    }

    return (
        <SafeAreaProvider style={styles.safeArea}>            
            <Container style={styles.container}>

                <Heading menu={openMenu} />

                <Button
                    onPress={openInstructions}
                    title="Detect Item Colour"
                />

                <Text style={styles.heading}>
                    Trending Now!
                </Text>
                <TrendingSlider />


                <Button title="camera" onPress={CameraBtn}>Camera</Button>
                <Button title="" onPress={ClothingsBtn}>Clothings</Button>

                


            </Container>

            {menu ? (<Menu
                closeMenu={closeMenu}
            />) : (console.log("Closed"))}

            <BottomBar />

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    // safeArea: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    container: {
        width: "100%"
    },

    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
})