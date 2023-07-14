import { React } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Button } from 'native-base';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { BACKEND } from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";


export const ClosetDetail = () => {
    const isFocused = useIsFocused();
    const route = useRoute();
    const { closet } = route.params;
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [haveData, setHaveData] = useState(false)
    const [clothings, setClothings] = useState([])
    const [update, setUpdate] = useState(false)
    const [changeMode, setChangeMode] = useState(false)
    const [updatedName, setUpdatedName] = useState(closet.name);
    const [updatedOccasion, setUpdatedOccasion] = useState(closet.occasion);

    const goToClosetMain = () => {
        navigation.navigate("ClosetScreen");
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            if (jsonValue != null) {
                setUser(JSON.parse(jsonValue).data)
                getClothingData()
            }
        } catch (e) {
            // error reading value
        }
    };
    
    const getClothingData = () => {
        // console.log("GET CLOTHINGS")
        console.log(closet._id)
        axios.get(`${BACKEND}/clothing/closet/${closet._id}`).then(
            (res) => {
                setClothings(res.data)
                // console.log(res.data)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }


    const deleteCloset = () => {
        axios
            .delete(`${BACKEND}/closet`, {
                data: { closetId: closet._id }, // Send the closetId in the request body
            })
            .then(() => {
                console.log("Closet deleted");
                navigation.navigate("ClosetScreen"); // Navigate to the closets screen after deletion
            })
            .catch(error => {
                console.error(error);
            });
    };
    
    const addItem = () => {
        navigation.navigate("AddClothingToCloset", { closet });
    }

    useEffect(() => {
        getClothingData()
        setUpdate(!update)
        // console.log("USEEFECT FIRED")
        // console.log(closet)
    }, [isFocused])

    useEffect(() => {
        if (user !== '') {
            setHaveData(true)
        }
    }, [user])

    useEffect(() => {
        getData()
        getClothingData()

    }, [update, haveData])

    useEffect(() => {
        console.log("Mode is: " + changeMode);
    }, [changeMode]);

    const detailChangeMode = () => {
        setChangeMode(!changeMode);
    };


    const saveChanges = () => {
        // Make an API call to update the closet information
        axios
            .put(`${BACKEND}/closet`, {
                closetId: closet._id,
                name: updatedName,
                occasion: updatedOccasion
            })
            .then(() => {
                console.log("Closet updated");
            // Refresh the data or navigate to another screen if needed
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <View>
            <Text style={styles.title}>Closet Name:</Text>
            {!changeMode && (
                <Text style={styles.information}>{closet.name}</Text>
            )}
            {changeMode && (
                <TextInput
                style={styles.information}
                value={updatedName}
                onChangeText={setUpdatedName}
                />
            )}

            <Text style={styles.title}>Description:</Text>
            {!changeMode && (
                <Text style={styles.information}>{closet.occasion}</Text>
            )}
            {changeMode && (
                <TextInput
                style={styles.information}
                value={updatedOccasion}
                onChangeText={setUpdatedOccasion}
                />
            )}

            {clothings&&clothings.length > 0 ? (
                clothings.map((item, index) => <Text key={index}>{item.name}</Text>)
            ) : <Text>No Clothing found</Text>}

            <Button onPress={addItem}>+</Button>
            {!changeMode && (
                <Button onPress={detailChangeMode}>Update Closet</Button>
            )}
            {changeMode && (
                <Button onPress={saveChanges}>Save Changes</Button>
            )}
            {changeMode && (
                <Button onPress={detailChangeMode}>Cancel</Button>
            )}
            <Button onPress={deleteCloset}>Delete Closet</Button>
            <Button onPress={goToClosetMain}>Back</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    },
    information: {
        marginBottom: 10,
    }
});