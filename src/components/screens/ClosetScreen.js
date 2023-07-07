import { Container, Text } from "native-base";
import { StyleSheet, Button } from "react-native";
import { Heading } from "../layout/Heading";
import { useState } from "react";
import { Menu } from "../layout/Menu";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomBar } from '../layout/BottomBar';

export const ClosetScreen = () => {
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

            </Container>

            {menu ? (<Menu
                closeMenu={closeMenu}
            />) : (console.log("Closed"))}

            <BottomBar />

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },

    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
})