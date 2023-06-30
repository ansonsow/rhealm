import { Container, Text } from "native-base";
import { StyleSheet,Button } from "react-native";
import { Heading } from "../layout/Heading";
import { useState,useEffect } from "react";
import { BACKEND } from "@env";
import CreateClothingForm from '../forms/CreateClothingForm'


import { Menu } from "../layout/Menu";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
// import { set } from "mongoose";



export const ClothingsContainer = () => {
    const navigation = useNavigation();


    const [user, setUser] = useState('');
    const [haveData, setHaveData] = useState(false)
    const [clothings, setClothings] = useState([])
    const [update,setUpdate] = useState(false)

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user');
          if(jsonValue!=null){
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
            (res)=>{

                setClothings(res.data.data)
                // console.log(clothings)
                
            }
        ).catch(
            (err)=>{
                console.log("err")
            }
        )

    }

    const forceUpdate = () => {
        setUpdate(!update)
    }

    useEffect(()=>{
        if(user!==''){
            setHaveData(true)
        }
    },[user])
    
    useEffect(() => {

        getData()

    }, [update,haveData])

    const handlePress = (i) =>{
        // console.log(i)
        const props = i;
        navigation.setParams({item : i})
        navigation.navigate("ClothingContainer",item=i );
    } 

    
    return(
        <>
        <Container style={styles.container}>
            <CreateClothingForm forceUpdate={forceUpdate} user={user}/>
            {clothings.length>0?(
                clothings.map((item,index) => <Button title = {item.name} onPress={()=>{handlePress(item)}} key={index}>{item.name}</Button>)
            ):<Text>No Clothing found</Text>}

        </Container>
        </>
    )
    
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})