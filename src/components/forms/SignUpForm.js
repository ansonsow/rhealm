import { Container, VStack, FormControl, HStack, Input, Button, Icon, Pressable, Text } from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const SignUpForm = props => {

    const { onNext, onNameChange, onEmailChange, onPswChange, onConfPswChange, error } = props;

    const [show, setShow] = useState(false);
    const [showConf, setShowConf] = useState(false);

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
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="************"
                            width="100%"
                            px={3}
                            marginBottom={5}
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
                <FormControl isRequired>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <HStack width="100%">
                        <Input
                            placeholder="************"
                            width="100%"
                            px={3}
                            marginBottom={5}
                            type={showConf ? "text" : "password"}
                            InputRightElement={
                                <Pressable onPress={() => setShowConf(!showConf)} paddingRight={1}>
                                    <Icon as={<MaterialIcons name={showConf ? "visibility" : "visibility-off"} size={10} color="muted.400" />} />
                                </Pressable>
                            }
                            onChangeText={value => {
                                onConfPswChange(value)
                                confPassword = value
                            }}
                        />
                    </HStack>
                </FormControl>
                <Text color="red.500">{error}</Text>
                <Button
                    onPress={onNext}
                    marginTop={20}
                >
                    Next
                </Button>
            </VStack>
        </Container>
    )
}

export default SignUpForm;