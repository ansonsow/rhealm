import { Container, VStack, FormControl, HStack, Input, Button } from "native-base";
import { useState, useEffect } from "react";
import { BACKEND } from "@env";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreateClosetForm = props => {
    const [user, setUser] = useState('');
    const [name, setName] = useState('')
    const [occasion, setOccasion] = useState('')

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            if (jsonValue != null) {
                setUser(JSON.parse(jsonValue).data)
                console.log("UserID: " + user._id)
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getData()
    }, [])

    const handleNameChange = (name) => {
        setName(name)
    }

    const handleOccasionChange = (occasion) => {
        setOccasion(occasion)
    }

    const handleClicked = () => {
        const uid = user._id

        axios.post(`${BACKEND}/closet`, {
            userId: uid,
            name: name,
            occasion: occasion
        }).then((res) => {
            props.forceUpdate()
        })
    }

    return (
        <Container>
            <VStack width="100%">
                <FormControl isRequired>
                    <FormControl.Label>Name</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="Sweter Group"
                            variant="underlined"
                            onChangeText={value => {
                                handleNameChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>

                <FormControl isRequired>
                    <FormControl.Label>Occasion</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="Sweter Group for Winter"
                            variant="underlined"
                            onChangeText={value => {
                                handleOccasionChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>

                <Button onPress={handleClicked}>
                    Add
                </Button>

            </VStack>
        </Container>
    )
}