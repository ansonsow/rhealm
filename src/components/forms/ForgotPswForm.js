import { Container, VStack, FormControl, HStack, Input, Button, Pressable, Text } from "native-base";
import { useState } from "react";

export const ForgotPswForm = props => {

    const { onSubmit, onNameChange, onEmailChange, error, login } = props;

    return (
        <Container>
            <VStack width="100%">
                <FormControl isRequired>
                    <FormControl.Label>Name</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="John Doe"
                            width="100%"
                            px={3}
                            marginBottom={5}
                            onChangeText={value => {
                                onNameChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Email</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="johndoe@gmail.com"
                            width="100%"
                            px={3}
                            marginBottom={5}
                            onChangeText={value => {
                                onEmailChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <Text color="red.500">{error}</Text>
                <Button
                    onPress={onSubmit}
                    marginTop={10}
                    width={250}
                >
                    Reset Password
                </Button>
                <Button
                    onPress={login}
                    marginTop={5}
                    width={250}
                >
                    Back to Login Page
                </Button>
            </VStack>
        </Container>
    )
}