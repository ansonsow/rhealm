import { Container, VStack, FormControl, HStack, Input, Button, Icon, Pressable, Text, WarningOutlineIcon } from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const LoginForm = props => {

    const { onSubmit, onEmailChange, onPswChange, error, forgotPsw } = props;

    const [show, setShow] = useState(false);

    return (
        <Container>
            <VStack width="100%">
                <FormControl isRequired>
                    <FormControl.Label>Email</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="johndoe@gmail.com"
                            width="100%"
                            px={3}
                            marginBottom={5}
                            autoCapitalize="none"
                            onChangeText={value => {
                                onEmailChange(value)
                            }}
                        />
                    </HStack>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="************"
                            width="100%"
                            px={3}
                            marginBottom={5}
                            autoCapitalize="none"
                            type={show ? "text" : "password"}
                            InputRightElement={
                                <Pressable onPress={() => setShow(!show)} paddingRight={1}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} size={10} color="muted.400" />} />
                                </Pressable>
                            }
                            onChangeText={value => {
                                onPswChange(value)
                                password = value;
                            }}
                        />
                    </HStack>
                </FormControl>
                {/* <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                >
                    {error}
                </FormControl.ErrorMessage> */}
                <Text color="red.500">{error}</Text>
                <Text
                    onPress={forgotPsw}
                >Forgot Password?</Text>
                <Button
                    onPress={onSubmit}
                    marginTop={10}
                    width={250}
                >
                    Login
                </Button>
            </VStack>
        </Container>
    )
}