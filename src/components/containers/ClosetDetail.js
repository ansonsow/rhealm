import { React } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { BACKEND } from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export const ClosetDetail = () => {
    const route = useRoute();
    const { closet } = route.params;
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [haveData, setHaveData] = useState(false)
    const [clothings, setClothings] = useState([])
    const [update, setUpdate] = useState(false)

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
        axios.get(`${BACKEND}/clothing/user/${user._id}`).then(
            (res) => {
                setClothings(res.data.data)
            }
        ).catch(
            (err) => {
                console.log("err")
            }
        )
    }

    const deleteCloset = () => {
        axios.delete(`${BACKEND}/closet`, { 
            closetId: closet._id 
        }).then(() => {
            console.log("Closet deleted");
            navigation.navigate("ClosetScreen"); // Navigate to the closets screen after deletion
        })
        .catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        if (user !== '') {
            setHaveData(true)
        }
    }, [user])

    useEffect(() => {
        getData()
    }, [update, haveData])

    return (
        <View>
            <Text style={styles.title}>Closet Name:</Text>
            <Text style={styles.information}>{closet.name}</Text>
            <Text style={styles.title}>Description:</Text>
            <Text style={styles.information}>{closet.occasion}</Text>

            {clothings.length > 0 ? (
                clothings.map((item, index) => <Text key={index}>{item.name}</Text>)
            ) : <Text>No Clothing found</Text>}

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