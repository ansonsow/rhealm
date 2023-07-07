import React from 'react';
import { StyleSheet, Button, View } from "react-native";

export const BottomBar = () => {
    return (
        <View style={styles.bottomBar}>
            <Button title="Scan" />
            <Button title="Home" />
            <Button title="Closet" />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        // shadow settings
        shadowOffsetX: 8,
        shadowOffsetY: 8,
        shadowSize: 20, // aka "spread"
        shadowBlur: 15, // aka "blur"
        shadowStrength: 0.4,

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});
