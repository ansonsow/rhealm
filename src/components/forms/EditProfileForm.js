import { AntDesign } from "@expo/vector-icons";
import { Container, FormControl, VStack, View, Icon, Text, HStack, Input, Button } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { PopUp } from "../layout/PopUp";


export const EditProfileForm = () => {
    const navigation = useNavigation();

    const [popOne, setPopOne] = useState(false);
    const [popTwo, setPopTwo] = useState(false);


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

    return (
        <Container>
            <VStack style={styles.container}>
                <View style={styles.headingMenu}>
                    <Icon
                        as={<AntDesign name="left" size={30} />}
                        onPress={backToMenu}
                    />
                    <Text
                        style={styles.heading}
                    >
                        Edit Profile
                    </Text>
                </View>
                <FormControl>
                    <FormControl.Label>
                        Name
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Name"
                            style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Email
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Email"
                            style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Password
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Password"
                            style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Skin Tone
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Skin Tone"
                            style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Hair Colour
                    </FormControl.Label>
                    <HStack style={styles.subcontainer}>
                        <Input
                            placeholder="Hair Colour"
                            style={styles.input}
                        />
                    </HStack>
                </FormControl>
                <Button
                    onPress={onSubmit}
                    style={styles.btn}
                >
                    Save
                </Button>
                <Button
                    onPress={backToProfile}
                    style={styles.btn}
                >
                    Back
                </Button>
            </VStack>

            {popOne ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            Are you sure?
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            Your changes will be lost.
                        </Text>
                        <Button
                            onPress={cancelBtn}
                            style={styles.btn}
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={confirmBtn}
                            style={styles.btn}
                        >
                            Leave
                        </Button>
                    </>
                }
            />) : (console.log("Closed"))}
            {popTwo ? (<PopUp
                content={
                    <>
                        <Text
                            style={styles.headingPop}
                        >
                            Saved!
                        </Text>
                        <Text
                            style={styles.text}
                        >
                            Your changes have been saved.
                        </Text>
                        <Button
                            onPress={nextBtn}
                            style={styles.btn}
                        >
                            Back to Profile
                        </Button>
                    </>
                }
            />) : (console.log("Closed"))}



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
    // headingMenuCont: {
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-between"
    // },
    // subheading: {
    //     fontWeight: "bold",
    //     fontSize: 16,
    //     paddingTop: 15
    // },
    // text: {
    //     fontSize: 16,
    //     paddingTop: 15
    // },
    container: {
        width: "100%"
    },
    subcontainer: {
        width: "100%"
    },
    input: {
        width: 200,
        marginBottom: 5
    },
    headingPop: {
        fontWeight: "bold",
        fontSize: 20
    },
    text: {
        fontSize: 16
    },
    btn: {
        marginTop: 10,
        width: 250
    }
})