import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { VStack } from 'native-base';
import { BACKEND } from "@env";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Set Items Tab
const Items = () => {
    return (
        <View style={styles.tabContainer}>
            <Text>Screen 1</Text>
        </View>
    );
};

//Set Closets Tab
const Closets = () => {
    const [user, setUser] = useState('');
    const [closets, setClosets] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('user');
                if (jsonValue != null) {
                    const userValue = JSON.parse(jsonValue).data;
                    setUser(userValue);
                    console.log("UserID: " + userValue._id);
                }
            } catch (e) {
                console.error(e);
            }
        };

        getData();
    }, []);

    useEffect(() => {
        const getClosetData = () => {
            axios.get(`${BACKEND}/closet/${user._id}`)
                .then(res => {
                    setClosets(res.data);
                    console.log("Closets: " + JSON.stringify(res.data));
                })
                .catch(err => {
                    console.error(err);
                });
        };

        if (user._id) {
            getClosetData();
        }
    }, [user]);

    const navigation = useNavigation();

    const goToCreateCloset = () => {
        navigation.navigate("CreateCloset");
    };

    const goToClosetDetail = (closet) => {
        navigation.navigate("ClosetDetail", { closet });
    };


    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity
                onPress={goToCreateCloset}
                style={styles.createClosetBtn}
            >
                <Text>Create Closet</Text>
            </TouchableOpacity>
            {closets.map(closet => (
                <TouchableOpacity key={closet.id} style={styles.closetContainer} onPress={() => goToClosetDetail(closet)}>
                    <Text>{closet.name}</Text>
                    <Text>{closet.occasion}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const Tab = createBottomTabNavigator();

const ContainerWithTabs = () => {
    return (
        <VStack style={styles.container}>
            <Tab.Navigator 
            screenOptions={{
                "tabBarLabelStyle": { "fontSize": 14 },
            }}>
                <Tab.Screen name="Closets" component={Closets} />
                <Tab.Screen name="Items" component={Items} />
            </Tab.Navigator>
        </VStack>
        
    );
};

//Set Tabs Navigation and Export
export const ClosetsAndItemsContainer = () => {
    return (
        <ContainerWithTabs />
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    container: {
        width: '100%',
        height: '100%'
    },
    createClosetBtn: {
        width: '30%',
        height: '20%',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    closetContainer: {
        width: '30%',
        height: '20%',
        backgroundColor: '#DADADA',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    }

});