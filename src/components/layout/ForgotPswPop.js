import { Container, Text, Center, Button } from "native-base";

export const ForgotPswPop = props => {

    const { onPress } = props;

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
                    Password Sent
                </Text>
                <Text
                    fontSize={16}
                >
                    New password has been sent to your email.
                    Please check the email to retrieve your password.
                </Text>
                <Button
                    onPress={onPress}
                    marginTop={5}
                    width={250}
                >
                    Back to Login Page
                </Button>
            </Center>
        </Container>
    )
}