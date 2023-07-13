import { useNavigation } from "@react-navigation/native";
import { Container, Text, Image, View, Center, Modal, Pressable } from "native-base";
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { svgConfirmIcon, svgDeleteIcon, svgEditIcon, svgLeftIcon } from "../../../assets/images/svgs";
import axios from "axios";
import { BACKEND } from "@env";


export const ClothingContainer = (props) => {
    const navigation = useNavigation();

    const [data, setData] = useState('')
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);
    const [popThree, setPopThree] = useState(false);
    const [popFour, setPopFour] = useState(false);

    // console.log(props.route.params)
    useEffect(() => {
        setData(props.route.params)
    }, [data])


    // console.log(data)
    console.log(data._id);

    const backToMain = () => {
        navigation.navigate("ClothingInstructions");
    }

    const deleteClothing = () => {
        setPopThree(!popThree);
    }

    const confirmEdit = () => {
        setPopTwo(!popTwo);
    }

    const editClothing = () => {
        setEdit(!edit);
    }

    const openPopBack = () => {
        setPopOne(!popOne);
    }

    const confirmBtn = () => {
        console.log("Where does this option needs to go to?");
    }

    const cancelBtn = () => {
        setPopOne(!popOne);
    }

    const nextBtn = () => {
        navigation.navigate("Main");
    }

    const deleteBtn = () => {
        axios.delete(`${BACKEND}/clothing`, {
            data: { clothingId: data._id }
        })
            .then((res) => {
                console.log("Res: ", res);
                setPopFour(!popFour);
            })
            .catch((error) => {
                console.log("E: ", error.response);
            })
    }

    const cancelBtnTwo = () => {
        setPopThree(!popThree);
    }

    return (
        <View>
            <View style={styles.headingMenu}>
                {edit ? (
                    <TouchableOpacity
                        onPress={openPopBack}
                    >
                        <SvgXml
                            xml={svgLeftIcon}
                        />
                    </TouchableOpacity>
                ) : <TouchableOpacity
                    onPress={backToMain}
                >
                    <SvgXml
                        xml={svgLeftIcon}
                    />
                </TouchableOpacity>}
                <Text
                    style={styles.heading}
                >
                    Item
                </Text>
                <View style={styles.icons}>
                    {edit ? (
                        <>
                            <TouchableOpacity
                                onPress={deleteClothing}
                            >
                                <SvgXml
                                    xml={svgDeleteIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={confirmEdit}
                            >
                                <SvgXml
                                    xml={svgConfirmIcon}
                                    style={styles.svg}
                                />
                            </TouchableOpacity>
                        </>
                    ) : <TouchableOpacity
                        onPress={editClothing}
                    >
                        <SvgXml
                            xml={svgEditIcon}
                        />
                    </TouchableOpacity>}
                </View>
            </View>

            {data.photo && <Image source={{ uri: data.photo[0] }} alt="Clothing Photo" style={styles.photoStyling} />}

            <View style={styles.subcontainer}>
                <Text style={styles.label}>Name</Text>
                {data.name && (
                    <Text style={styles.text}>{data.name}</Text>)}
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.label}>Colour</Text>
                <View style={styles.colorCont}>
                    {data.colour && data.colour.map((colour, index) => (
                        <View style={styles.colourContainer}>
                            <View
                                key={index}
                                style={{
                                    backgroundColor: colour.hexValue,
                                    width: 20,
                                    height: 20,
                                    borderRadius: 20 / 2,
                                }}
                            >
                            </View>
                            <Text
                            // key={coloursNaming[index]}
                            >{colour.name}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.label}>Type of Texture</Text>
                {data.type && (<Text style={styles.text}>Type: {data.type}</Text>)}
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.label}>Texture</Text>
                {data.texture && (
                    <Text style={styles.text}>{data.texture}</Text>)}
            </View>

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
            ) : console.log("Closed")}

            {popTwo ? (
                <Modal
                    isOpen={popTwo}
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
                                    onPress={nextBtn}
                                    style={styles.btnPopNextAction}
                                >
                                    <Text style={styles.btnTextPopNexAction}>Back to Closet</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal.Content>
                </Modal>
            ) : (console.log("Closed"))}

            {popThree ? (
                <Modal
                    isOpen={popThree}
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
                                Do you really want to delete this item? This process cannot be undone.
                            </Text>

                            <View
                                style={styles.btnPopCont}
                            >
                                <Pressable
                                    onPress={deleteBtn}
                                    style={styles.btnPopNAction}
                                >
                                    <Text style={styles.btnTextPopNAction}>Delete</Text>
                                </Pressable>
                                <Pressable
                                    onPress={cancelBtnTwo}
                                    style={styles.btnPopPAction}
                                >
                                    <Text style={styles.btnTextPopPAction}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal.Content>
                </Modal>
            ) : console.log("Closed")}

            {popFour ? (
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
                                The item has been deleted.
                            </Text>

                            <View style={styles.btnPopCont}>
                                <Pressable
                                    onPress={nextBtn}
                                    style={styles.btnPopNextAction}
                                >
                                    <Text style={styles.btnTextPopNexAction}>Back to Closet</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal.Content>
                </Modal>
            ) : (console.log("Closed"))}

        </View>
    )
}

const styles = StyleSheet.create({
    // PHOTO STYLING
    photoStyling: {
        width: "80%",
        height: "60%",
        borderColor: "#000",
        borderWidth: 1,
        alignSelf: "center",
        borderRadius: 8
    },

    // COLOUR CONTAINER
    colourContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        gap: 5,
        padding: 5,
        borderColor: "#515151",
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        // flex: 1
    },
    colorCont: {
        // borderColor: "#000",
        // borderBottomWidth: 1,
        // borderRadius: 15,
        // borderBottomColor: "#E9E9E9",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },

    // TEXT CONTAINER
    subcontainer: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
        color: "#515151"
    },

    // PROFILE HEADING
    container: {
        width: "100%",
    },
    headingMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // alignContent: "space-between",
        padding: 10
    },
    heading: {
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 10
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 10
    },


    // SVG - this is necessary to change considering every SVG we need to alter
    svg: {
        color: "#000"
    },

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