import { Container, Text, Center, Button } from "native-base";

export const SignUpOnePop = props => {

    const { cancelBtn, leaveBtn } = props;

    return (
        <Container
        // backgroundColor="gray.300"
        // top={0}
        // left={0}
        // width="100%"
        // height="100%"
        >
            <Center
                backgroundColor="gray.400"
                width={300}
                height={300}
            >
                <Text
                    fontWeight="bold"
                    fontSize={20}
                >
                    Are you sure?
                </Text>
                <Text
                    fontSize={16}
                >
                    Your changes will be lost.
                </Text>
                <Button
                    onPress={cancelBtn}
                    marginTop={5}
                    width={250}
                >
                    Cancel
                </Button>
                <Button
                    onPress={leaveBtn}
                    marginTop={5}
                    width={250}
                >
                    Leave
                </Button>
            </Center>
        </Container>
    )
}