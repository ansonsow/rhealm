import { Container, Text, Button, Icon, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export const OnboardingOne = () => {

    const skipSetup = () => {
        console.log("Skip the Setup")
    }

    const instructions = () => {
        console.log("Back to Instructions")
    }

    return (
        <Container>
            <View
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
            >
                <Icon as={<AntDesign name="left" size={24} color="black" />} />
                <Icon as={<AntDesign name="questioncircleo" size={24} color="black" />} />
            </View>
            <Text
                fontWeight="bold"
                fontSize={18}
                alignSelf="center"
                marginTop={3}
            >
                Validate your skin tone
            </Text>
            <Button
                onPress={skipSetup}
                marginTop={20}
                width={250}
            >
                Skip
            </Button>
            <Button
                onPress={instructions}
                marginTop={20}
                width={250}
            >
                Back
            </Button>
        </Container>
    )
}