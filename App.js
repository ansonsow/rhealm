import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react'
import { NativeBaseProvider } from 'native-base';
import { AppStack } from './src/components/stacks/AppStack';
import { theme } from './themes';
import "expo-dev-client";

export default function App() {

  return (
    <SafeAreaView
      style={styles.container}
    >
      <NativeBaseProvider
        theme={theme}
      >
        <AppStack />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    // paddingLeft: 20,
    // paddingTop: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
});
