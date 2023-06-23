import { Container, Text, Icon, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Menu = props => {

    const navigation = useNavigation();

    const { closeMenu } = props;

    const removeUser = async () => {
        try {
            await AsyncStorage.removeItem("user");

            // const jsonValue = await AsyncStorage.getItem("user");
            // console.log(jsonValue);

        } catch (error) {
            console.log(error);
        }
    }

    const profilePage = () => {
        navigation.navigate("Profile");
    }

    const signOut = () => {
        removeUser();
        navigation.navigate("Login");
    }

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
                onPress={profilePage}
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
                onPress={signOut}
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