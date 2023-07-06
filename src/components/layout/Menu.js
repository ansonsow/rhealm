import { Container, Text, Icon, View, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from "react-native-svg";
import { svgDarkModeIcon, svgLeftIcon, svgNotificationIcon, svgPrivacyIcon, svgProfileIcon, svgRightArrow, svgSignOutIcon, svgTermsIcon } from "../../../assets/images/svgs";

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
                <TouchableOpacity
                    onPress={closeMenu}
                >
                    <SvgXml
                        xml={svgLeftIcon}
                    />
                </TouchableOpacity>
                <Text
                    style={styles.heading}
                >
                    Settings
                </Text>
            </View>

            <View style={styles.menuContainer}>

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={profilePage}
                        style={styles.menuSubItem}
                    >
                        <View style={styles.menuSubItemHeading}>
                            <SvgXml
                                xml={svgProfileIcon}
                            />
                            <Text
                                style={styles.text}

                            >
                                Profile
                            </Text>
                        </View>
                        <SvgXml
                            xml={svgRightArrow}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={""}
                        style={styles.menuSubItem}
                    >
                        <View style={styles.menuSubItemHeading}>
                            <SvgXml
                                xml={svgNotificationIcon}
                            />
                            <Text
                                style={styles.text}

                            >
                                Notification
                            </Text>
                        </View>
                        <SvgXml
                            xml={svgRightArrow}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={""}
                        style={styles.menuSubItem}
                    >
                        <View style={styles.menuSubItemHeading}>
                            <SvgXml
                                xml={svgDarkModeIcon}
                            />
                            <Text
                                style={styles.text}
                            >
                                Dark Mode
                            </Text>
                        </View>
                        {/* <SvgXml
                            xml={svgRightArrow}
                        /> */}
                    </TouchableOpacity>
                </View>

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={""}
                        style={styles.menuSubItem}
                    >
                        <View style={styles.menuSubItemHeading}>
                            <SvgXml
                                xml={svgPrivacyIcon}
                            />
                            <Text
                                style={styles.text}
                            >
                                Privacy & Policy
                            </Text>
                        </View>
                        <SvgXml
                            xml={svgRightArrow}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={""}
                        style={styles.menuSubItem}
                    >
                        <View style={styles.menuSubItemHeading}>
                            <SvgXml
                                xml={svgTermsIcon}
                            />
                            <Text
                                style={styles.text}
                            >
                                Terms & Conditions
                            </Text>
                        </View>
                        <SvgXml
                            xml={svgRightArrow}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={signOut}
                        style={styles.menuSubItem}
                    >
                        <View style={styles.menuSubItemHeading}>
                            <SvgXml
                                xml={svgSignOutIcon}
                            />
                            <Text
                                style={styles.text}
                            >
                                Sign Out
                            </Text>
                        </View>
                        <SvgXml
                            xml={svgRightArrow}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </Container >
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 10,
    },
    container: {
        position: "absolute",
        zIndex: 100,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        paddingTop: 30,
    },
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        marginTop: 10
    },
    menuContainer: {
        backgroundColor: "#F9FAFB",
        borderRadius: "12px",
        width: "90%",
        justifyContent: "center",
        alignSelf: "center",
        padding: 10,
        marginTop: 20,

        // alignItems: "center"
        // boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.20)"
    },
    menuItem: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        margin: 7
    },
    menuSubItem: {
        gap: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%"
    },
    menuSubItemHeading: {
        gap: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        marginRight: 10
    }
})