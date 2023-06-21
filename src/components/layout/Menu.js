import { Container, Text, Icon, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export const Menu = props => {

    const { closeMenu } = props;

    return (
        <Container style={styles.container}>
            <View style={styles.headingMenu}>
                <Icon
                    as={<AntDesign name="left" size={30} />}
                    onPress={closeMenu}
                />
                <Text
                    style={styles.heading}
                >
                    Settings
                </Text>
            </View>
            <Text
                style={styles.text}
            >
                Profile
            </Text>
            <Text
                style={styles.text}
            >
                Dark Mode
            </Text>
            <Text
                style={styles.text}
            >
                Sign Out
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10
    },
    container: {
        position: "absolute",
        zIndex: 100,
        width: "100%",
        height: "100%",
        backgroundColor: "lightgray",
        paddingTop: 99,
    },
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        marginTop: 10
    }
})