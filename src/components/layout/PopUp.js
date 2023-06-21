import { Container, Center } from "native-base";
import { StyleSheet } from "react-native";

export const PopUp = props => {

    const { content } = props;

    return (
        <Container>
            <Center
                style={styles.container}
            >
                {content}
            </Center>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        width: 300,
        height: 300,
    },
})