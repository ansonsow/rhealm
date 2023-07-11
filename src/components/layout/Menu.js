import { Container, Text, Icon, View, Image, Center } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from "react-native-svg";
import { svgDarkModeIcon, svgLeftIcon, svgNotificationIcon, svgPrivacyIcon, svgProfileIcon, svgRightArrow, svgSignOutIcon, svgTermsIcon } from "../../../assets/images/svgs";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

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

    const signOutFunc = async () => {
        await signOut(auth);
        removeUser();
        navigation.navigate("Login");
        console.log("User has been signed out!");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingMenu}>
                <TouchableOpacity
                    onPress={closeMenu}
                >
                    <SvgXml
                        xml={svgLeftIcon}
                    />
                </TouchableOpacity>
                <Text
                    style={styles.subheading}
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

                <View
                    style={styles.line}
                />

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

                <View
                    style={styles.line}
                />

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

                <View
                    style={styles.line}
                />

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

                <View
                    style={styles.line}
                />

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

                <View
                    style={styles.line}
                />

                <View style={styles.menuItem}>
                    <TouchableOpacity
                        onPress={signOutFunc}
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // SUBHEADING
    subheading: {
        fontSize: 16,
        fontWeight: "bold",
        // fontFamily: "indivisible-semibold",
        paddingLeft: 10,
    },

    // LINES
    line: {
        borderBottomWidth: 1,
        width: "100%",
        borderColor: "#EAECF0",
        // flex: 1
        marginLeft: 5,
        marginRight: 5,
    },

    // SETTINGS
    text: {
        // marginTop: 10
    },
    menuContainer: {
        backgroundColor: "#F9FAFB",
        borderRadius: 12,
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
        marginVertical: 10
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
        alignItems: "center",
    },
    image: {
        marginRight: 10
    },
    heading: {
        fontWeight: "bold",
        fontSize: 16,
    },
    container: {
        position: "absolute",
        zIndex: 100,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        // paddingTop: 40,
        // top: 0
    },
    headingMenu: {
        display: "flex",
        paddingLeft: 25,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "space-between",
        // alignSelf: "center",
        // justifyContent: "space-evenly"
    },
})