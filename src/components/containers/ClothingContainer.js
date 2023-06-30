import { Container, Text } from "native-base";
import { useState,useEffect } from 'react'


export const ClothingContainer = (props) => {
    const [data, setData] = useState('')
    // console.log(props.route.params)
    useEffect(() => {
        setData(props.route.params)
    }, [])
    return(
        <Container>
            <Text>Name: {data.name}</Text>

            {data.color?<Text>Color: {data.color}</Text>:<></>}
        </Container>
    )
}