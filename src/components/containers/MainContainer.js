import { Container, Text } from "native-base";
import { StyleSheet } from "react-native";
import { Heading } from "../layout/Heading";
import { useState } from "react";
import { Menu } from "../layout/Menu";

export const MainContainer = () => {

    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true);
        // console.log("Menu btn was clicked.")
    }

    const closeMenu = () => {
        setMenu(false);
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