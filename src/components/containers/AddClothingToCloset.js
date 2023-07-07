// import { Container, Text, CheckBox } from "native-base";
// import { StyleSheet, Button, TouchableOpacity } from "react-native";
// import { Heading } from "../layout/Heading";
// import { useState, useEffect } from "react";
// import { BACKEND } from "@env";
// import CreateClothingForm from '../forms/CreateClothingForm'


// import { Menu } from "../layout/Menu";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from "axios"
// // import { set } from "mongoose";



// export const AddClothingToCloset = () => {
//     const navigation = useNavigation();


//     const [user, setUser] = useState('');
//     const [haveData, setHaveData] = useState(false)
//     const [clothings, setClothings] = useState([])
//     const [update, setUpdate] = useState(false)
//     const [selectedItems, setSelectedItems] = useState([]);

//     const getData = async () => {
//         try {
//             const jsonValue = await AsyncStorage.getItem('user');
//             if (jsonValue != null) {
//                 setUser(JSON.parse(jsonValue).data)
//                 getClothingData()
//             }
//         } catch (e) {
//             // error reading value
//         }
//     };

//     const getClothingData = () => {
//         console.log(user._id)
//         axios.get(`${BACKEND}/clothing/user/${user._id}`).then(
//             (res) => {
//                 if(res.data!=undefined){
//                     if(res.data.data!=undefined){
//                         setClothings(res.data.data)
//                     }
//                 }
//                 // console.log(clothings)

//             }
//         ).catch(
//             (err) => {
//                 console.log(err)
//             }
//         )

//     }

//     const forceUpdate = () => {
//         setUpdate(!update)
//     }

//     useEffect(() => {
//         if (user !== '') {
//             setHaveData(true)
//         }
//     }, [user])

//     useEffect(() => {

//         getData()

//     }, [update, haveData])

//     const handleSelection = (item) => {
//         // Check if the item is already selected
//         const isItemSelected = selectedItems.includes(item);
    
//         if (isItemSelected) {
//           // Item is already selected, remove it from the list
//           const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
//           setSelectedItems(updatedItems);
//         } else {
//           // Item is not selected, add it to the list
//           setSelectedItems([...selectedItems, item]);
//         }
//       };

//     const handleAddItems = () => {
//         // Handle the logic to add the selected items
//         console.log(selectedItems);
//       };

//     return (
//         <>
//       <Container style={styles.container}>
//         {clothings.length > 0 ? (
//           clothings.map((item, index) => (
//             <CheckBox
//               key={index}
//               checked={selectedItems.includes(item)}
//               onPress={() => handleSelection(item)}
//             >
//               <Text>{item.name}</Text>
//             </CheckBox>
//           ))
//         ) : (
//           <Text>No Clothing found</Text>
//         )}

//         <Button title="Add Items" onPress={handleAddItems}>
//           <Text>Add Items</Text>
//         </Button>
//       </Container>
//         </>
//     )

// }

// const styles = StyleSheet.create({
//     container: {
//         width: "100%"
//     }
// })

import { Container, Text } from "native-base";
import { StyleSheet, Button, TouchableOpacity } from "react-native";
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
                console.log(res.data)
                let tempArr = selectedItems;
                res.data.map((item,index)=>{
                    tempArr.push(item)
                })
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
        console.log(selectedItems)
        selectedItems.forEach(element => {
            axios.put(`${BACKEND}/clothing`,{
                clothingId : element._id,
                closetId: closet._id
            })
        });

        navigation.navigate("ClosetDetail", { closet });


    }

    const handleClickItem = (i) => {

        let tempArr = selectedItems;
        tempArr.push(i);
        setSelectedItems(tempArr)
    }

    return (
        <>
       <Container style={styles.container}>
         {clothings.length > 0 ? (
           clothings.map((item, index) => (
            <>

                <Text 
                onPress={()=>{handleClickItem(item)}}
                >{item.name}</Text>

            </>

          ))
        ) : (
          <Text>No Clothing found</Text>
        )}

        <Button title="Add Items" onPress={handleAddItems}>
          <Text>Add Items</Text>
        </Button>
      </Container> 
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})