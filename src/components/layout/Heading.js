import { Container, Text, View, Pressable } from "native-base";
import { Image } from "react-native";
import axios from "axios";
import { StyleSheet } from "react-native";

export const Heading = props => {

    const { menu } = props;

    return (
        <Container style={styles.container} >
            <Pressable
                style={styles.photoContainer}
                onPress={menu}
            >
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" }}
                    alt={"name"}
                    style={styles.profilePhoto}

                />
            </Pressable>
            <View style={styles.headingContent}>
                <Text
                    style={styles.text}

                >
                    Hello Marina!
                </Text>
                <Text
                    style={styles.text}
                >
                    It's sunny outside.
                </Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    profilePhoto: {
        maxWidth: "50%",
        maxHeight: "50%"
    },
    container: {
        backgroundColor: "lightgray",
        width: "100%",
        padding: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50
    },
    headingContent: {
        padding: 10
    },
    photoContainer: {
        backgroundColor: "white",
        width: 80,
        height: 80,
        borderRadius: 50,
        padding: 10
    }
})