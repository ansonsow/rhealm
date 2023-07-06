import { useNavigation } from "@react-navigation/native";
import { Container, Text } from "native-base";
import { useState, useEffect } from 'react';
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { svgLeftIcon } from "../../../assets/images/svgs";


export const ClothingContainer = (props) => {
    const navigation = useNavigation();

    const [data, setData] = useState('')
    const [add, setAdd] = useState(false)

    // console.log(props.route.params)
    useEffect(() => {
        setData(props.route.params)
    }, [data])


    // console.log(data)

    const backToMain = () => {
        navigation.navigate("ClothingsContainer");
    }

    return (
        <Container>
            <TouchableOpacity
                onPress={backToMain}
            >
                <SvgXml
                    xml={svgLeftIcon}
                />
            </TouchableOpacity>
            <Text>Name: {data.name}</Text>

            {data.colour ? <Text>Color: {data.colour}</Text> : <></>}
            {data.type && <Text>Type: {data.type}</Text>}
            {data.texture && <Text>Texture: {data.texture}</Text>}
        </Container>
    )
}