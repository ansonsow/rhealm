import { Container, Text } from "native-base";
import { StyleSheet, Button } from "react-native";
import { Heading } from "../layout/Heading";
import { useState } from "react";
import { Menu } from "../layout/Menu";
import { useNavigation } from "@react-navigation/native";


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

    return (
        <>
            <Container style={styles.container}>
                <Text
                    style={styles.heading}
                >
                    Home
                </Text>
                <Heading
                    menu={openMenu}
                />
                <Text
                    style={styles.heading}
                >
                    Trending Now!
                </Text>
            </Container>

            <Button title="camera" onPress={CameraBtn}>Camera</Button>

            <Button title="clothings" onPress={ClothingsBtn}>Clothings</Button>


            {menu ? (<Menu
                closeMenu={closeMenu}
            />) : (console.log("Closed"))}
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
    container: {
        width: "100%"
    }
})