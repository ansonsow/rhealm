import { EditProfileForm } from "../forms/EditProfileForm";
import { useEffect, useState } from "react";
import { PopUp } from "../layout/PopUp";
import { Text, Button, Container, Modal, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native-web";
import { BACKEND } from "@env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EditProfileContainer = () => {

    const navigation = useNavigation();

    const [error, setError] = useState("");
    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [user, setUser] = useState(null);

    const backToMenu = () => {
        navigation.navigate("Profile");
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
    }

    const mainPage = () => {
        navigation.navigate("Main");
    }

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
                            // const user = JSON.parse(jsonValue);
                            // const updatedValue = JSON.stringify(user);
                            // await AsyncStorage.setItem("user", updatedValue);

                            // MISSING UPDATING THE USER IN ORDER TO SHOW THE NEW INFO

                            navigation.navigate("Profile");
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

    // console.log(user);
    // console.log(user._id);
    // useEffect(() => {

    // })

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
                error={error}
                onSubmit={onSubmit}
                backToProfile={backToProfile}
                confirmChanges={confirmChanges}
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                deleteAccount={deleteAccount}
            />

            {popOne ? (
                <Modal
                    isOpen={popOne}
                    width="100%"
                >
                    <Modal.Content>
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
                    </Modal.Content>
                </Modal>
            ) : (console.log("Closed"))}

            {popTwo ? (
                <Modal
                    isOpen={popFour}
                    width="100%"
                >
                    <Modal.Content>
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
                    </Modal.Content>
                </Modal>) : (console.log("Closed"))}
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
        padding: 20
    },
})