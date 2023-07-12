import { Container, Text, View, Center, ScrollView } from "native-base";
import { StyleSheet, Button, TouchableOpacity } from "react-native";
import { Heading } from "../layout/Heading";
import { useState, useEffect } from "react";
import { BACKEND } from "@env";
import CreateClothingForm from '../forms/CreateClothingForm'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
// import { set } from "mongoose";



export const ClothingsContainer = ({ route }) => {
    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [haveData, setHaveData] = useState(false)
    const [clothings, setClothings] = useState([])
    const [update, setUpdate] = useState(false)

    const { coloursHex, coloursNaming, imageSelection } = route.params;

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
        // console.log(user._id)
        axios.get(`${BACKEND}/clothing/user/${user._id}`).then(
            (res) => {
                setClothings(res.data.data)
                // console.log(clothings)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )

    }

    const forceUpdate = () => {
        setUpdate(!update)
    }

    useEffect(() => {
        if (user !== '') {
            setHaveData(true)
        }
    }, [user])

    useEffect(() => {

        getData()

    }, [update, haveData])

    const handlePress = (i) => {
        // console.log(i)
        const props = i;
        navigation.setParams({ item: i })
        navigation.navigate("ClothingContainer", item = i);
    }

    // console.log(coloursHex);
    // console.log(coloursNaming);
    // console.log(imageSelection);
    // console.log(clothings);

    return (
        <Center>
            <View style={styles.container}>
                <CreateClothingForm
                    forceUpdate={forceUpdate}
                    user={user}
                    coloursHex={coloursHex}
                    coloursNaming={coloursNaming}
                    imageSelection={imageSelection}
                />
                {/* <ScrollView> */}
                {clothings.length > 0 ? (
                    clothings.map((item, index) => <Button title={item.name} onPress={() => { handlePress(item) }} key={index}>{item.name}</Button>)
                ) : <Text>No Clothing found</Text>}
                {/* </ScrollView> */}
            </View>
        </Center>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    colourContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        gap: 5,
        padding: 5,
        borderColor: "#515151",
        borderWidth: 1,
        borderRadius: "15px",
        margin: 5
    }
})