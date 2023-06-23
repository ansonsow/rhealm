import { Container, Text, Button, Icon, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export const Profile = props => {

    const { closeMenu, openEdit } = props;

    return (
        <Container style={styles.container}>
            <View style={styles.headingMenuCont}>
                <View style={styles.headingMenu}>
                    <Icon
                        as={<AntDesign name="left" size={30} />}
                        onPress={closeMenu}
                    />
                    <Text
                        style={styles.heading}
                    >
                        Profile
                    </Text>
                </View>
                <Button
                    onPress={openEdit}
                >
                    Edit
                </Button>
            </View>
            <Text
                style={styles.subheading}
            >
                Name
            </Text>
            <Text
                style={styles.text}
            >
                Marina
            </Text>
            <Text
                style={styles.subheading}
            >
                Email
            </Text>
            <Text
                style={styles.text}
            >
                email@gmail.com
            </Text>
            {/* <Text
                style={styles.subheading}
            >
                Password
            </Text>
            <Text
                style={styles.text}
            >
                ***********
            </Text> */}
            <Text
                style={styles.subheading}
            >
                Skin Tone
            </Text>
            <Text
                style={styles.text}
            >
                Tan (skin tone and image)
            </Text>
            <Text
                style={styles.subheading}
            >
                Hair Colour
            </Text>
            <Text
                style={styles.text}
            >
                Brown (hair colour and image)
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10
    },
    headingMenuCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    subheading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 15
    },
    text: {
        fontSize: 16,
        paddingTop: 15
    },
    container: {
        width: "100%"
    }
})