import { Text, Button, Container } from "native-base"
import { StyleSheet } from "react-native"

export const InstructionContainer = () => {

    const onNext = () => {
        console.log("Next Working")
    }

    const inputSkinTone = () => {
        console.log("Input Skin Tone Working")
    }

    return (
        <Container>
            <Text
                style={styles.heading}
            >
                Instruction
            </Text>
            <Text
                style={styles.subheading}
            >
                In order to recommend based on your skin tone, we need your skin colour palette.
            </Text>
            <Text
                style={styles.text}
            >
                1. Please keep the distance of your camera about 20cm.
            </Text>
            <Text
                style={styles.text}
            >
                2. Please take a photo of your neck or arm.
            </Text>
            <Button
                onPress={onNext}
                style={styles.btn}
            >
                Next
            </Button>
            <Button
                onPress={inputSkinTone}
                style={styles.btn}
            >
                I know my skin tone already!
            </Button>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
    subheading: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10
    },
    text: {
        fontSize: 14,
        marginTop: 10
    },
    btn: {
        marginTop: 10,
        width: 250
    }
})