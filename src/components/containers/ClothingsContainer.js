import { Container, Text } from "native-base";
import { StyleSheet,Button } from "react-native";
import { Heading } from "../layout/Heading";
import { useState,useEffect } from "react";
import { BACKEND } from "@env";

import { Menu } from "../layout/Menu";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"



export const ClothingsContainer = () => {

    const [user, setUser] = useState('');

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user');
          if(jsonValue!=null){
            //   console.log("wat")
            setUser(JSON.parse(jsonValue).data)
            getClothingData()
          }
        } catch (e) {
          // error reading value
        }
    };

    const getClothingData = async () => {
        console.log(user._id)
        axios.get(`${BACKEND}/clothing/user`,{
            userId: '6495d283fb82d52847f7bef1'
        }).then(
            (res)=>{
                // setTimeout(() => {
                //     console.log("CLOTHING")
                //     console.log(res)  
                // }, 1000);
                console.log("CLOTHING")
                console.log(res)  
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )

    }
    
    useEffect(() => {
        console.log("Clothings")
        getData()
        
    }, [])
    return(
        <></>
    )
    
}