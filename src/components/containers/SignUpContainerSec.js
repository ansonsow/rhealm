import { useNavigation } from "@react-navigation/native";
import { Button, Center, Container, Text, View, Pressable } from "native-base";
import { StyleSheet } from "react-native";


export const SignUpContainerSec = () => {

    const navigation = useNavigation();

    const goToInstructions = () => {
        navigation.navigate("Instruction");
    }

    return (
        <Center>
            <View>
                <Text>Add a Profile Page</Text>
                <Text style={styles.heading}>This image will be shown on the main,
                    so SMILE :) or you can pick and avatar!</Text>

                <Pressable
                    onPress={goToInstructions}
                >
                    <Text style={styles.btnText}>Next</Text>
                </Pressable>
            </View>
        </Center>
    )
}

const styles = StyleSheet.create({
    // HEADING
    heading: {
        display: "flex",
        flexWrap: "wrap"
    },

    // BTN TEXT
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
        // fontFamily: "indivisible-semibold"
    },
})