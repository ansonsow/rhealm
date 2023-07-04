import { Container, Text } from "native-base";
import { useState,useEffect } from 'react'


export const ClothingContainer = (props) => {
    const [data, setData] = useState('')
    const [add,setAdd] = useState(false)

    // console.log(props.route.params)
    useEffect(() => {
        setData(props.route.params)
    }, [data])

    
    // console.log(data)

    return(
        <Container>
            <Text>Name: {data.name}</Text>

            {data.colour?<Text>Color: {data.colour}</Text>:<></>}
            {data.type && <Text>Type: {data.type}</Text>}
            {data.texture && <Text>Texture: {data.texture}</Text>}
        </Container>
    )
}