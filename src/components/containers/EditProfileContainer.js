import { EditProfileForm } from "../forms/EditProfileForm";
import { useEffect, useState } from "react";
import { PopUp } from "../layout/PopUp";
import { Text, Button, Container } from "native-base";
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

    const backToMenu = () => {
        navigation.navigate("Profile");
    }

    const onSubmit = () => {
        // setError("Testing error");
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

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("user");
            if (jsonValue !== null) {
                if (name === "" && email === "") {
                    setError("Please include valid data");
                } else {
                    axios.put(`${BACKEND}/user`, {
                        name: name,
                        email: email
                    })
                        .then((res) => {
                            console.log("Res: ", res);
                        })
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {

    // })

    const handleNameChange = (name) => {
        setName(name);
    }

    const handleEmailChange = (email) => {
        setEmail(email);
    }

    return (
        <Container>
            <EditProfileForm
                backToMenu={backToMenu}
                error={error}
                onSubmit={onSubmit}
                backToProfile={backToProfile}
                confirmChanges={confirmChanges}
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
            />

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