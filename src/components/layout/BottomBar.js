import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Container, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { useState } from "react";
import { Feather } from '@expo/vector-icons';

export const BottomBar = () => {
    const navigation = useNavigation();

    const homePage = () => {
        navigation.navigate("Login");
    }

    const cameraPage = () => {
        navigation.navigate("CameraContainer");
    }

    const closetPage = () => {
        // navigation.navigate("Closet");
    }

    /*------ GRID LAYOUT ------*/
    const Row = ({ children }) => (
        <View style={styles.gridRow}>{children}</View>
    )

    const Col = ({ children }) => {
        return  (
            <View style={styles.gridCol}>{children}</View>
        )
    }

    return (
        <View style={styles.barContainer}>
            <View style={styles.gridParent}>
                <Row>
                    <Col style={styles.leftIconWrap} onPress={homePage}>
                        <Feather name="box" size={24} color="black" />
                    </Col>

                    <Col onPress={cameraPage}>
                        <Feather name="aperture" size={24} color="black" />
                    </Col>

                    <Col style={styles.rightIconWrap} onPress={closetPage}>
                        <Feather name="briefcase" size={24} color="black" />
                    </Col>
                </Row>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        alignItems: "center"
    },

    gridParent: {
        flex: 3, // total columns
        marginHorizontal: "auto"
    },

    gridRow: {
        flexDirection: "row",
        flexShrink: 1,
        flexGrow: 1,
        flex: 1,
        gap: 15,
        alignItems: "center"
    },

    gridCol: {
        flex: 1
    },

    leftIconWrap: {
        flexDirection: "row",
        flexShrink: 1,
        flexGrow: 1,
        justifyContent: "flex-start"
    },

    rightIconWrap: {
        flexDirection: "row",
        flexShrink: 1,
        flexGrow: 1,
        justifyContent: "flex-end"
    }
})