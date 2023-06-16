import { Text, Button, Container } from "native-base"

export const InstructionContainer = () => {

    const onNext = () => {
        console.log("Next Working")
    }

    const backToSplash = () => {
        console.log("Splash Screen Working")
    }

    const inputSkinTone = () => {
        console.log("Input Skin Tone Working")
    }

    return (
        <Container>
            <Text
                fontWeight="bold"
                fontSize={20}
            >
                Instruction
            </Text>
            <Text
                fontWeight="bold"
                fontSize={16}
                marginTop={10}
            >
                In order to recommend based on your skin tone, we need your skin colour palette.
            </Text>
            <Text
                fontSize={14}
                marginTop={10}
            >
                1. Please keep the distance of your camera about 20cm.
            </Text>
            <Text
                fontSize={14}
                marginTop={5}
            >
                2. Please take a photo of your neck or arm.
            </Text>
            <Button
                onPress={onNext}
                marginTop={20}
                width={250}
            >
                Next
            </Button>
            <Button
                onPress={backToSplash}
                marginTop={5}
                width={250}
            >
                Back
            </Button>
            <Button
                onPress={inputSkinTone}
                marginTop={5}
                width={250}
            >
                I know my skin tone already!
            </Button>
        </Container>
    )
}