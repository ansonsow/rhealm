import { EditProfileForm } from "../forms/EditProfileForm";
import { useEffect, useState } from "react";
import { Text, Container, Center, View, Pressable } from "native-base";
import { Overlay } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native-web";
import { BACKEND } from "@env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SvgXml } from "react-native-svg";
import { svgConfirmIcon } from "../../../assets/images/svgs";

export const EditProfileContainer = () => {

    const navigation = useNavigation();

    const [error, setError] = useState("");
    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(null);

    const backToMenu = () => {
        setPopOne(!popOne);
    }

    const onSubmit = () => {
        setPopTwo(!popTwo);
    }

    const backToProfile = () => {
        setPopOne(!popOne);
    }

    const cancelBtn = () => {
        setPopOne(false);
    }

    const nextBtn = () => {
        navigation.navigate("Profile");
    }

    const confirmBtn = () => {
        navigation.navigate("Profile");
    }

    const confirmChanges = () => {
        getData();
        setPopTwo(!popTwo);
    }

    const mainPage = () => {
        navigation.navigate("Main");
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("user", jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("user");
            const userInfo = JSON.parse(jsonValue).data;
            const userId = userInfo._id;

            if (jsonValue !== null) {
                if (name === "" && email === "") {
                    setError("Please include valid data");
                } else {
                    axios.put(`${BACKEND}/user`, {
                        userId: userId,
                        name: name,
                        email: email
                    })
                        .then(async (res) => {
                            console.log("Res: ", res);
                            // console.log(res.config.data);
                            // storeData(res.config.data);
                            // const jsonValue = await AsyncStorage.getItem("user");

                            // if (jsonValue != null) {
                            //     setUser(JSON.parse(jsonValue).data);
                            // }

                        })
                        .catch((error) => {
                            console.log("E: ", error);
                        })
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteAccount = async () => {
        const jsonValue = await AsyncStorage.getItem("user");
        const userInfo = JSON.parse(jsonValue).data;
        const userId = userInfo._id;

        console.log(userId);
    }

    const handleNameChange = (name) => {
        setName(name);
    }

    // console.log(name);

    const handleEmailChange = (email) => {
        setEmail(email);
    }

    // console.log(email);

    return (
        <Center>
            <EditProfileForm
                backToMenu={backToMenu}
                errorMsg={error}
                onSubmit={onSubmit}
                confirmChanges={confirmChanges}
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                deleteAccount={deleteAccount}
            />

            {popOne ? (
                <Overlay
                    isVisible={popOne}
                >
                    <View style={styles.popCont}>
                        <Text
                            style={styles.headingPop}
                        >
                            Are you sure?
                        </Text>
                        <Text
                            style={styles.textPop}
                        >
                            Your changes will be lost.
                        </Text>

                        <View
                            style={styles.btnPopCont}
                        >
                            <Pressable
                                onPress={confirmBtn}
                                style={styles.btnPopNAction}
                            >
                                <Text style={styles.btnTextPopNAction}>Leave</Text>
                            </Pressable>
                            <Pressable
                                onPress={cancelBtn}
                                style={styles.btnPopPAction}
                            >
                                <Text style={styles.btnTextPopPAction}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </Overlay>
            ) : (console.log("Closed"))}

            {popTwo ? (
                <Overlay
                    isVisible={popTwo}
                >
                    <View style={styles.popCont}>
                        <SvgXml
                            xml={svgConfirmIcon}
                            style={styles.svg}
                        />
                        <Text
                            style={styles.textPop}
                        >
                            Changes have been saved.
                        </Text>

                        <View style={styles.btnPopCont}>
                            <Pressable
                                onPress={mainPage}
                                style={styles.btnPopNextAction}
                            >
                                <Text style={styles.btnTextPopNexAction}>Go to Main</Text>
                            </Pressable>
                        </View>
                    </View>
                </Overlay>) : (console.log("Closed"))}
        </Center>
    )
}

const styles = StyleSheet.create({
    // POPUP
    headingPop: {
        fontWeight: "bold",
        fontSize: 16,
        // fontFamily: "indivisible-semibold",
    },
    textPop: {
        fontSize: 16,
        paddingTop: 10,
    },
    btnPopNAction: {
        backgroundColor: "transparent",
        width: 100,
        alignItems: "center"
    },
    btnTextPopNAction: {
        fontSize: 14,
    },
    btnPopPAction: {
        backgroundColor: "#D33D12",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopPAction: {
        fontSize: 14,
        color: "#fff",
    },
    btnPopNextAction: {
        // backgroundColor: "#D33D12",
        borderRadius: 15,
        width: 100,
        alignItems: "center"
    },
    btnTextPopNexAction: {
        fontSize: 14,
        color: "#fff",
    },
    btnPopCont: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignContent: "flex-end"
    },
    popCont: {
        padding: 20,
        width: 300,
    },

    // SVG - this is necessary to change considering every SVG we need to alter
    svg: {
        color: "#000"
    },
})