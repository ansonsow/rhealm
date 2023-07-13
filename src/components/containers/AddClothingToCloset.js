

import { Container, Text } from "native-base";
import { StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native";
import { Heading } from "../layout/Heading";
import { useState, useEffect } from "react";
import { BACKEND } from "@env";
import { useRoute } from "@react-navigation/native";

import CreateClothingForm from '../forms/CreateClothingForm'


import { Menu } from "../layout/Menu";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
// import { set } from "mongoose";



export const AddClothingToCloset = () => {

    const navigation = useNavigation();

    const route = useRoute();
    const { closet } = route.params;
    const [user, setUser] = useState('');
    const [haveData, setHaveData] = useState(false)
    const [clothings, setClothings] = useState([])
    const [update, setUpdate] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])


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

    const getClosetData = () => {
        axios.get(`${BACKEND}/clothing/closet/${closet._id}`).then(
            (res)=>{
                // console.log(res.data)
                // let tempArr = selectedItems;
                // res.data.map((item,index)=>{
                //     if(!tempArr.includes(item)){
                //         tempArr.push(item)
                //     }
                // })
                let tempArr = selectedItems.slice(); // Create a copy of selectedItems

                res.data.forEach((item) => {
                  if (!tempArr.some((selectedItem) => selectedItem._id === item._id)) {
                    tempArr.push(item);
                  }
                });

                setSelectedItems(tempArr)
            }
        ).catch(
            (err)=>{

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
        getClosetData()

    }, [update, haveData])

    const handleAddItems = () => {
        // console.log(selectedItems)
        selectedItems.forEach(element => {
            // console.log(element._id)
            axios.put(`${BACKEND}/clothing`,{
                clothingId : element._id,
                closetId: closet._id
            })
        });

        navigation.navigate("ClosetDetail", { closet });


    }

    const handleClickItem = (i) => {
        // console.log(i.name)
        // console.log(selectedItems)
        let tempArr = selectedItems;
        const index = tempArr.findIndex((selectedItem) => selectedItem._id === i._id);

        if (index !== -1) {
          tempArr.splice(index, 1);
        } else {
          tempArr.push(i);
        }
        setSelectedItems(tempArr);
        setUpdate(!update)
        // console.log("SELECTED")
        // console.log(selectedItems.map((item,index)=>{
        //     console.log(item.name)
        // }))
    }

    return (
        <>
       <Container style={styles.container}>
           <ScrollView>
         {clothings.length > 0 ? (
           clothings.map((item, index) => {
            const isSelected = selectedItems.find((selectedItem) => selectedItem._id === item._id);
            const fIndex = selectedItems.findIndex((selectedItem) => selectedItem._id === item._id);


            // const isSelected = item.selected
            // const isSelected = true
            let display = false
            if(isSelected !== undefined){
                display = true
            }
            // console.log(selectedItems.find((selectedItem) => selectedItem._id === item._id))
            
          
            return (
              <Text
                key={index}
                onPress={() => handleClickItem(item)}
                style={[styles.clothingText, fIndex!==-1 ? styles.selectedClothingText : null]}
              >
                {item.name}
              </Text>
            );
          })
        ) : (
          <Text>No Clothing found</Text>
        )}
        </ScrollView>

        <Button title="Add Items" onPress={handleAddItems}>
          <Text>Add Items</Text>
        </Button>
      </Container> 
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: "1"
      },
      clothingText: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10
      },
      selectedClothingText: {
        backgroundColor: "lightblue"
      }
})